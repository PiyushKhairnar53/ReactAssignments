import { useState } from 'react';
import './App.css';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from 'react-bootstrap';
import Navbar from './components/navbar';
import {Product} from './components/Product';
import ListProducts from './components/ListProducts';
import ModalComponent from './components/ModalComponent';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setNewStep(1);
  }
  const handleShow = () => setShow(true);

  const [step, setNewStep] = useState(1);
  const [search, setSearch] = useState('');
  const [itemName, setItemName] = useState<Product[]>([]);
  const [sortedBy, setSortedBy] = useState<string>();

  const handleAddItem = (productName: string, productDesc: string, productPrice: number, productQty: number) => {
    const newItem: Product = {
      id: Date.now(),
      product_name: productName,
      product_desc: productDesc,
      product_price: productPrice,
      product_qty: productQty,
    };
    setItemName([...itemName, newItem]);
    handleClose();
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSortList = (sortBy:string) => {

    let sortedList: Product[] = [];
    if (sortBy === 'ascending') {
      sortedList = [...itemName].sort((a, b) => a.product_name.localeCompare(b.product_name));
    } 
    else if (sortBy === 'descending') {
      sortedList = [...itemName].sort((a, b) => b.product_name.localeCompare(a.product_name));
    } 
    setItemName(sortedList);
    setSortedBy(sortBy);
  }

  const filteredItems = {
    list: itemName.filter((item) =>
      item.product_name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  return (
    <div >
      <Navbar />
      <div className='buttons-bar'>
      <div className='const-margin'>
        <span >Sort By</span>
          <Button type='button' className='button' onClick={()=>handleSortList('ascending')} >Ascending</Button>
          <Button type='button' className='button' onClick={()=>handleSortList('descending')} >Descending</Button>
        </div>
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
        <ModalComponent SaveProduct={handleAddItem}/>
      </Modal>
      <ListProducts products={filteredItems.list} />
    </div>
  );
}
export default App;