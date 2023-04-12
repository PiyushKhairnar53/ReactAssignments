import { useState } from 'react';
import './App.css';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from 'react-bootstrap';
import Navbar from './components/navbar';
import { Stepper } from 'react-form-stepper';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setNewStep(1);
  }
  const handleShow = () => setShow(true);

  const [step, setNewStep] = useState(1);
  const [search, setSearch] = useState('');

  const nextStep = () => {
    setNewStep(step + 1);
  };

  const prevStep = () => {
    setNewStep(step - 1);
  };

  interface Product {
    id: number;
    product_name: string;
    product_desc: string;
    product_price: number;
    product_qty: number;
  }

  const [itemName, setItemName] = useState<Product[]>([]);
  const [productName, setProuctName] = useState<string>('');
  const [productDesc, setProductDesc] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(Number);
  const [productQty, setProductQty] = useState<number>(Number);


  const handleAddItem = () => {

    const newItem: Product = {
      id: Date.now(),
      product_name: productName,
      product_desc: productDesc,
      product_price: productPrice,
      product_qty: productQty,
    };

    setItemName([...itemName, newItem]);
    setFieldDefault()
  };

  const filteredItems = {
    list: itemName.filter((item) =>
      item.product_name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  function setFieldDefault() {
    setProuctName('');
    setProductDesc('');
    setProductPrice(0);
    setProductQty(0);
    setNewStep(1);
    handleClose();
  }

  const handleRemoveItem = (id: number) => {
    const updatedItems = itemName.filter((item) => item.id !== id);
    setItemName(updatedItems);
  }

  return (
    <div >
      <Navbar />
      <div className='buttons-bar'>
        <input
          type="text"
          className='search-bar'
          placeholder="Search here"
          onChange={handleSearch}
          value={search} />
        <Button type="button" className='add-button' onClick={handleShow}>
          + Add Grocery
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>

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
            <Button type='submit' variant="primary" disabled={productPrice == 0 || productQty == 0} onClick={handleAddItem}>
              Submit
            </Button>
          </Modal.Footer>
        </>}

      </Modal>

      <div>
        <table className='table-row'>
          <thead className='thead-dark'>
            <tr>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
            </tr>
          </thead>
        </table>
        <ul>
          {(
            filteredItems.list.map((post) => {
              return (
                <div>
                  <div>
                    <table>
                      <tr key={post.id}>
                        <td > <strong>{post.product_name}</strong></td>
                        <td > {post.product_desc}</td>
                        <td > {post.product_price}</td>
                        <td > {post.product_qty}</td>
                        <Button variant='danger' className='card-button' type='button' onClick={() => handleRemoveItem(post.id)}>Delete</Button>
                      </tr>
                    </table>
                  </div>
                </div>
              )
            })
          )}
        </ul>
      </div>
    </div>
  );
}
export default App;