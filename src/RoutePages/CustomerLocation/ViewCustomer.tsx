import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading';
import { Customer } from './Customer';
import { useNavigate, useLocation } from 'react-router-dom';
import ModalComponent from '../../components/ModalComponent';
import { Modal } from 'react-bootstrap';

const ViewCustomer = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [modalData, setModalData] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = (id: any) => {
    setModalData(id);
    setShow(true);
  }

  const getData = () =>{
    axios.get('https://localhost:44367/api/Customer')
    .then(res => {
      setData(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();
  }, []);

  const handleCustomerUpdate = (custId: any, custName: any, age: any, contactNo: any, street: any, city: any, zipcode: any, state: any, country: any) => {

    navigate('/CustomerLocation/CustomerLocationForm',
      {
        state: {
          customerId: custId,
          name: custName,
          age: age,
          contactNo: contactNo,
          street: street,
          city: city,
          zipcode: zipcode,
          state: state,
          country: country
        }
      });
  };

  const handleCustomerDelete = (customerId: any) => {
    axios.delete(`https://localhost:44367/api/Customer/${customerId}`)
      .then(res => {
        getData();
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="text-center mt-2">
        <h4>Customer List</h4>
      </div>
      <hr />
      <table className="table table-striped text-center mt-2">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Age</th>
            <th>Contact No</th>
          </tr>
        </thead>
        {/* {loading && <Loading />} */}
        <tbody className="text-center">
          {data.map((item: any, index) => (
            <tr key={item.customerId}>
              <td onClick={() => handleShow(item.customerId)}>{index + 1}</td>
              <td onClick={() => handleShow(item.customerId)}>{item.name}</td>
              <td onClick={() => handleShow(item.customerId)}>{item.age}</td>
              <td onClick={() => handleShow(item.customerId)}>{item.contactNo}</td>
              <td>
                <button className="btn bg-warning text-white" onClick={() => handleCustomerUpdate(
                  item.customerId,
                  item.name,
                  item.age,
                  item.contactNo,
                  item.street,
                  item.city,
                  item.zipcode,
                  item.state,
                  item.country)}>Update</button>
              </td>
              <td>
                <button className="btn bg-danger text-white" disabled={item.street && item.city && item.zipcode && item.state && item.country}
                  onClick={() => handleCustomerDelete(item.customerId)} >Delete</button>
              </td>
            </tr>))}
        </tbody>
        <Modal show={show} onHide={handleClose}>
          <ModalComponent props={modalData} />
        </Modal>
      </table>
    </div>
  );
}

export default ViewCustomer;
