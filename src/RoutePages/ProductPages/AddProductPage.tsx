import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface ISaveProduct {
  onProductSave: (name: string, description: string, quantity: number, price: number) => void;
}

const AddProductPage: React.FC<ISaveProduct> = ({ onProductSave }) => {

  const [show, setShow] = useState(false);
  const [step, setNewStep] = useState(1);

  const navigate = useNavigate();

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
    onProductSave(productName, productDesc, productPrice, productQty);
    setFieldDefault()
    navigate('/ProductPages/ListProducts');
  };

  return (

    <div className="shadow container shadow">

      {step === 1 && <>
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
        <Button variant="primary" name="nextButton" disabled={productName.length >= 30 || productDesc.length <= 100} onClick={nextStep}>
          Next
        </Button></>}


      {step === 2 && <>
        <Form className='form-margins'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Price</Form.Label>
            <input className='input-item-details' type="number" placeholder="50" onChange={(e) => setProductPrice(e.target.valueAsNumber)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Quantity</Form.Label>
            <input className='input-item-details' type="number" onChange={(e) => setProductQty(e.target.valueAsNumber)} />
          </Form.Group>
        </Form>
        <div className='button-bar'>
          <Button variant="dark" onClick={prevStep}>
            Previous
          </Button>
          <Button type='submit' className='button-spacing' variant="primary" disabled={productPrice == 0 || productQty == 0} onClick={passAddItem}>
            Submit
          </Button>
        </div></>}
    </div>
  )
}

export default AddProductPage