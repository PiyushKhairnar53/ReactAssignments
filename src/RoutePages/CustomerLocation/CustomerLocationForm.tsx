import React, { useState } from 'react';
import { Button, Form, Modal, ModalTitle } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';
import { Customer } from './Customer';
import axios from 'axios'; 

const CustomerLocationForm: React.FC = () => {

    var currentPage = 'Add';
    var buttonName = 'Submit';
    var customerCustomerId = 0;
    var customerName = '';
    var customerAge = '';
    var customerContactNo = '';
    var customerStreet = '';
    var customerCity = '';
    var customerZipcode = '';
    var customerState = '';
    var customerCountry = '';

    const location = useLocation();
    if (location.state != null) {
        if (location.state.name != null && location.state.age != null && location.state.contactNo != null) {
            currentPage = 'Update';
            buttonName = 'Update';
            customerCustomerId = location.state.customerId
            customerName = location.state.name
            customerAge = location.state.age
            customerContactNo = location.state.contactNo
            customerStreet = location.state.street
            customerCity = location.state.city
            customerZipcode = location.state.zipcode
            customerState = location.state.state
            customerCountry = location.state.country
        }
    }
    const navigate = useNavigate();

    interface response {
        response: string | "No Response"
    }

    const [custId, setId] = useState<number>(customerCustomerId);
    const [custName, setName] = useState<string>(customerName);
    const [custAge, setAge] = useState<any>(customerAge);
    const [custContactNo, setContactNo] = useState<string>(customerContactNo);
    const [custStreet, setStreet] = useState<string>(customerStreet);
    const [custCity, setCity] = useState<string>(customerCity);
    const [custZipcode, setZipcode] = useState<string>(customerZipcode);
    const [custState, setState] = useState<string>(customerState);
    const [custCountry, setCountry] = useState<string>(customerCountry);
    const [show, setShow] = useState(false);
    const [valid,setValid] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (props:any) => {
        setShow(true);
        setValid(props);
    }
  
    const handleOnButtonClick = () => {

        const newCustomer: Customer = {
            customerId: custId,
            name: custName,
            age: custAge,
            contactNo: custContactNo,
            street: custStreet,
            city: custCity,
            zipcode: custZipcode,
            state: custState,
            country: custCountry
        }

        if (newCustomer.name !== '' && newCustomer.age !== '' && newCustomer.contactNo !== '') {

            if(newCustomer.name.match(/^[a-zA-Z]*$/))
            {
                if(newCustomer.age>=18 && newCustomer.age<100){
                    if (newCustomer.contactNo.match(/^\d{10}$/)) {
                        if (currentPage == 'Add') {
                            axios.post<response>('https://localhost:44367/api/Customer', newCustomer)
                                .then((res) => {
                                    console.log(res.data)
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                        }
            
                        if (currentPage == 'Update') {
                            axios.put<response>(`https://localhost:44367/api/Customer/${customerCustomerId}`, newCustomer)
                                .then((res) => {
                                    console.log(res.data)
                                })
                                .catch(function (error) {
                                    console.log(error);
                                    if (error.response.status === 404) {
                                        console.log('Resource could not be found!');
                                    } else {
                                        console.log(error.message);
                                    }
                                });
                        }
                        setFieldDefault();
                        navigate('/CustomerLocation/ViewCustomer');                    
                    }
                    else {
                        handleShow("Please enter valid Contact number");
                    }

                }else{
                    handleShow("Please enter valid Age");
                }
            }else{
                handleShow("Please enter valid Name");
            }
            
        }
        else{
            if(newCustomer.name === '' && newCustomer.age === '' && newCustomer.contactNo === '')
            {
                handleShow("Name Age and Customer fields are Empty");
            }
            else{
                if(newCustomer.name === ''){
                    handleShow("Name field is Empty");
                }
                if(newCustomer.age === ''){
                    handleShow("Age field is Empty");
                }
                if(newCustomer.contactNo === ''){
                    handleShow("Contact number field is Empty");
                }
            }

        }
    }


    function setFieldDefault() {
        setName('');
        setAge('');
        setContactNo('');
        setStreet('');
        setCity('');
        setZipcode('');
        setState('');
        setCountry('');
    }

    return (
        <div className="shadow container shadow">
            <div className="text-center mt-2">
                <h4>{currentPage} Customer</h4>
            </div>
            <Form>
                <Form.Group className="p-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name <FaQuestionCircle /> </Form.Label>
                    <Form.Control type="text" placeholder="John Doe" value={custName} onChange={(e) => setName(e.target.value)} required/>
                </Form.Group>

                <Form.Group
                    controlId="exampleForm.ControlTextarea1">
                    <div className='d-flex justify-content-between'>
                        <div className='w-50 p-3'>
                            <Form.Label>Age <FaQuestionCircle /></Form.Label>
                            <Form.Control type='number' value={custAge} onChange={(e) => setAge(e.target.value)} required/>
                        </div>
                        <div className='w-50 p-3'>
                            <Form.Label>Contact Number <FaQuestionCircle /></Form.Label>
                            <Form.Control type='number' value={custContactNo} onChange={(e) => setContactNo(e.target.value)} required/>
                        </div>
                    </div>
                </Form.Group>

                <Form.Group className="p-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Street </Form.Label>
                    <Form.Control type="text" placeholder="Sinhgad road" value={custStreet} onChange={(e) => setStreet(e.target.value)}/>
                </Form.Group>

                <Form.Group
                    controlId="exampleForm.ControlTextarea1">
                    <div className='d-flex justify-content-between'>
                        <div className='w-50 p-3'>
                            <Form.Label>City </Form.Label>
                            <Form.Control type='text' value={custCity} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className='w-50 p-3'>
                            <Form.Label>Zipcode </Form.Label>
                            <Form.Control type='number' value={custZipcode} onChange={(e) => setZipcode(e.target.value)} />
                        </div>
                    </div>
                </Form.Group>

                <Form.Group
                    controlId="exampleForm.ControlTextarea1">
                    <div className='d-flex justify-content-between'>
                        <div className='w-50 p-3'>
                            <Form.Label>State </Form.Label>
                            <Form.Control type='text' value={custState} onChange={(e) => setState(e.target.value)} />
                        </div>
                        <div className='w-50 p-3'>
                            <Form.Label>Country </Form.Label>
                            <Form.Control type='text' value={custCountry} onChange={(e) => setCountry(e.target.value)} />
                        </div>
                    </div>
                </Form.Group>

            </Form>
            <div className='d-flex justify-content-end'>
                <Button className='w-25 m-3' variant="primary" name="nextButton" onClick={handleOnButtonClick}>{buttonName}</Button>
            </div>
            <Modal show={show} valid={valid} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{valid}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please fill all mandatory fields correctly!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CustomerLocationForm;
