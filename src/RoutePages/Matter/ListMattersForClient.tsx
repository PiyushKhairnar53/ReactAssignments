import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Matter } from './Matter';
import { Button, Form } from 'react-bootstrap';
import { Client } from '../Client/Client';

const ListMattersForClient: React.FC = () => {

    const [matterData, setMatterData] = useState([]);
    const navigate = useNavigate();
    const [clientData, setClientData] = useState([]);
    const [jurisdictionData, setJurisdictionData] = useState([]);


    const setClients = () => {
        axios.get('https://localhost:44318/api/Client')
            .then(res => {
                setClientData(res.data.data);
                getMattersForClient(1);
            })
            .catch(err => console.log(err))
    }

    const getMattersForClient = (id: number) => {

        axios.get(`https://localhost:44318/api/Matter/${id}`)
            .then(res => {
                // getMatterJurisdiction(res.data.data.jurisdictionId);
                setMatterData(res.data.data)
            })
            .catch(err => console.log(err))
    }

    // const getMatterJurisdiction = () =>{
    //     axios.get(`https://localhost:44318/api/Jurisdiction/${}`)
    //     .then(res => {
    //       setJurisdictionData(res.data.data)
    //     })
    //     .catch(err => console.log(err))
    // }


    const handleChangeClientData = (e: any) => {
        getMattersForClient(e.value);
    }

    useEffect(() => {
        setClients();
    }, []);

    return (
        <div>

            <div>
                <Form>
                    <Form.Group className="p-3" controlId="exampleForm.ControlInput1">
                        <div className='d-flex justify-content-center'>
                            <div className='w-50 p-1 mt-1'>
                                <Form.Label><strong>Select Client</strong></Form.Label>
                                <Form.Select className='text-center' aria-label="Client" name="clientId"
                                    defaultValue="Select-Client" onChange={(e) => handleChangeClientData(e.target)}>
                                    <option value="Select Client for Matters" disabled>Select Client For Matters</option>
                                    {clientData.map((item: Client) => {
                                        return (<option key={item.id} value={item.id} >
                                            {item.name}
                                        </option>);
                                    })}
                                </Form.Select>
                            </div>
                        </div>
                    </Form.Group>

                </Form>
            </div>

            <div className="text-center mt-2">
                <h4>Matter List</h4>
            </div>
            <hr />
            <table className="table table-striped text-center mt-2">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {matterData.map((item: Matter, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.category}</td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default ListMattersForClient;
