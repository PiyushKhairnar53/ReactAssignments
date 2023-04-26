import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import axios from 'axios';
import { Matter } from './Matter';
import { Client } from '../Client/Client';
import { Jurisdiction } from '../Jurisdiction/Jurisdiction';
import { Attorney } from '../Attorney/Attorney';

const MatterForm: React.FC = () => {

    var currentPage = 'Add';

    const [matter, setMatter] = useState<Matter>({ id: 0, title: "", isActive: 1, description: "", category: "", jurisdictionId: 0, clientId: 0, billingAttorneyId: 0, responsibleAttorneyId: 0 });
    const [jurisdictionData, setJurisdictionData] = useState([]);
    const [clientData, setClientData] = useState([]);
    const [billingAttorneyData, setBillingAttorneyData] = useState([]);
    const [responsibleAttorneyData, setResponsibleAttorneyData] = useState([]);

    const handleChange = (e: any) => {
        setMatter({ ...matter, [e.name]: e.value });
    };

    const setJurisdictions = () => {

        axios.get('https://localhost:44318/api/Jurisdiction')
            .then(res => {
                setJurisdictionData(res.data.data)
            })
            .catch(err => console.log(err))
    }

    const setClients = () => {

        axios.get('https://localhost:44318/api/Client')
            .then(res => {
                setClientData(res.data.data)
            })
            .catch(err => console.log(err))
    }

    const handleChangeJurisdictionsData = (e: any) => {
        setMatter({ ...matter, [e.name]: e.value });
        getBillingAttorneys(e.value);
    }

    const setResponsibleAttorneys = () => {
        axios.get(`https://localhost:44318/api/Attorney`)
            .then(res => {
                setResponsibleAttorneyData(res.data.data)
            })
            .catch(err => console.log(err))
    }

    const getBillingAttorneys = (id: number) => {
        axios.get(`https://localhost:44318/api/Attorney/AttorneysForJurisdiction/${id}`)
            .then(res => {
                setBillingAttorneyData(res.data.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        setJurisdictions();
        setClients();
        setResponsibleAttorneys();
    }, []);

    const handleOnButtonClick = () => {
        if (matter.title !== '' && matter.jurisdictionId > 0 && matter.billingAttorneyId > 0 && matter.responsibleAttorneyId > 0) {
            axios.post('https://localhost:44318/api/Matter', matter)
                .then((res) => {
                    console.log(res.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log(matter);
        }
    }

    return (
        <div className="shadow container shadow">
            <div className="text-center mt-2">
                <h4>{currentPage} Matter</h4>
            </div>
            <Form>
                <Form.Group className="p-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title <FaQuestionCircle /> </Form.Label>
                    <Form.Control type="text" placeholder="John Doe" name="title" onChange={(e) => handleChange(e.target)} required />
                </Form.Group>

                <Form.Group className="p-3"
                    controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description <FaQuestionCircle /></Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" onChange={(e) => handleChange(e.target)} required />

                </Form.Group>

                <Form.Group className="p-3" controlId="exampleForm.ControlInput1">
                    <div className='d-flex justify-content-between'>
                        <div className='p-1 w-50'>
                            <Form.Label>Category <FaQuestionCircle /> </Form.Label>
                            <Form.Select aria-label="Matter Category" defaultValue="Select-Category" name="category" onChange={(e) => handleChange(e.target)}>
                                <option value="Select Category" disabled>Select Category</option>
                                <option value="Criminal">Criminal</option>
                                <option value="Accident">Accident</option>
                                <option value="Road rage">Road rage</option>
                                <option value="Compensation">Compensation</option>
                                <option value="Marriage">Marriage</option>
                                <option value="Rent">Rent</option>
                                <option value="Land and Agriculture">Land and Agriculture</option>
                            </Form.Select>
                        </div>

                        <div className='p-1 w-50'>
                            <Form.Label>Jurisdiction <FaQuestionCircle /> </Form.Label>
                            <Form.Select aria-label="Jurisdiction" name="jurisdictionId"
                                defaultValue="Select-Jurisdiction" onChange={(e) => handleChangeJurisdictionsData(e.target)}>
                                {jurisdictionData.map((item: Jurisdiction) => {
                                    return (<option key={item.id} value={item.id} >
                                        {item.area}
                                    </option>);
                                })}
                            </Form.Select>
                        </div>
                    </div>
                </Form.Group>

                <Form.Group className="p-3">
                    <Form.Label>Client <FaQuestionCircle /> </Form.Label>
                    <Form.Select className='text-center' aria-label="Client" name="clientId"
                        defaultValue="Select-Client" onChange={(e) => handleChange(e.target)}>
                        <option disabled>Select Client </option>
                        {clientData.map((item: Client) => {
                            return (<option key={item.id} value={item.id} >
                                {item.name} - {item.email}
                            </option>);
                        })}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="p-3" controlId="exampleForm.ControlInput1">
                    <div className='d-flex justify-content-between'>
                        <div className='p-1 w-50'>
                            <Form.Label>Billing Attorney <FaQuestionCircle /> </Form.Label>
                            <Form.Select aria-label="Billing Attorney" name="billingAttorneyId"
                                defaultValue="Select-Billing-Attorney" onChange={(e) => handleChange(e.target)}>
                                <option value="Select Billing Attorney" disabled>Select  Billing Attorney</option>
                                {billingAttorneyData.map((item: Attorney) => {
                                    return (<option key={item.id} value={item.id} >
                                        {item.name}
                                    </option>);
                                })}
                            </Form.Select>
                        </div>

                        <div className='p-1 w-50'>
                            <Form.Label>Responsible Attorney <FaQuestionCircle /> </Form.Label>
                            <Form.Select aria-label="Responsible Attorney" name="responsibleAttorneyId"
                                defaultValue="Select-Responsible-Attorney" onChange={(e) => handleChange(e.target)}>
                                <option value="Select Responsible Attorney" disabled>Select Responsible Attorney</option>
                                {responsibleAttorneyData.map((item: Attorney) => {
                                    return (<option key={item.id} value={item.id} >
                                        {item.name}
                                    </option>);
                                })}
                            </Form.Select>
                        </div>
                    </div>
                </Form.Group>


            </Form>
            <div className='d-flex justify-content-end'>
                <Button className='w-25 m-3' variant="primary" name="nextButton" onClick={handleOnButtonClick}>Submit</Button>
            </div>
        </div>
    )
}

export default MatterForm;
