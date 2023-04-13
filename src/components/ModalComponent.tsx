import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Product } from './Product';
import { Stepper } from 'react-form-stepper';

interface ISaveProduct{
  SaveProduct: (name: string, description: string, quantity: number, price: number) => void;
}

const ModalComponent:React.FC<ISaveProduct> = ({SaveProduct}) =>{

  const [show, setShow] = useState(false);
  const [step, setNewStep] = useState(1);
  const [search, setSearch] = useState('');

  const handleClose = () => {
    setShow(false);
    setNewStep(1);
  }

  const nextStep = () => {
    setNewStep(step + 1);
  };

  const prevStep = () => {
    setNewStep(step - 1);
  };

  const [productName, setProuctName] = useState<string>('');
  const [productDesc, setProductDesc] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(Number);
  const [productQty, setProductQty] = useState<number>(Number);

  function setFieldDefault() {
    setProuctName('');
    setProductDesc('');
    setProductPrice(0);
    setProductQty(0);
    setNewStep(1);
    handleClose();
  }

  const passAddItem = () => {
    SaveProduct(productName,productDesc,productPrice,productQty);
    setFieldDefault()
  };

  return  (
    <div>
        <Modal.Header closeButton>
          <Stepper className='stepper-color'
            steps={[{ label: 'Product Details' }, { label: 'Product Values' }]}
            activeStep={step} />
          <Modal.Title>Add Grocery</Modal.Title>
        </Modal.Header>

        {step === 1 && <>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Sprite" value={productName} onChange={(e) => setProuctName(e.target.value)} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Product Description</Form.Label>
                <Form.Control as="textarea" rows={2} value={productDesc} onChange={(e) => setProductDesc(e.target.value)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" name="nextButton" disabled={productName.length >= 30 || productDesc.length <= 100} onClick={nextStep}>
              Next
            </Button>
          </Modal.Footer>
        </>}

        {step === 2 && <>
          <Modal.Body>
            <Form className='form-margins'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Product Price</Form.Label>
                <input type="number" placeholder="50" onChange={(e) => setProductPrice(e.target.valueAsNumber)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Product Quantity</Form.Label>
                <input type="number" onChange={(e) => setProductQty(e.target.valueAsNumber)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={prevStep}>
              Previous
            </Button>
            <Button type='submit' variant="primary" disabled={productPrice == 0 || productQty == 0} onClick={passAddItem}>
              Submit
            </Button>
          </Modal.Footer>
        </>}
    </div>
  )

}

export default ModalComponent