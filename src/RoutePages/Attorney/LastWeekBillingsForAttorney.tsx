import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { InvoicesForMatter } from '../Invoices/InvoicesForMatter';
import { Button, Form } from 'react-bootstrap';
import { Attorney } from './Attorney';

const LastWeekBillings: React.FC = () => {

    const [matterData, setMatterData] = useState([]);
    const [attorneyData, setAttorneyData] = useState([]);
    const [message, setMessage] = useState<string>("");

    const setMatters = () => {
        axios.get('https://localhost:44318/api/Attorney')
            .then(res => {
                setAttorneyData(res.data.data);
                getBillingsForAttorney(1);
            })
            .catch(err => console.log(err))
    }

    const getBillingsForAttorney = (id: number) => {

        axios.get(`https://localhost:44318/api/Invoice/BillingsForAttorney/${id}`)
            .then(res => {
                setMatterData(res.data.data);
            })
            .catch(err => {
                setMatterData([])
                setMessage("No Invoices Found");
                console.log(err)
            })
    }

    const handleChangeAttorneyData = (e: any) => {
        getBillingsForAttorney(e.value);
    }

    useEffect(() => {
        setMatters();
    }, []);

    return (
        <div>
            <div>
                <Form>
                    <Form.Group className="p-3" controlId="exampleForm.ControlInput1">
                        <div className='d-flex justify-content-center'>
                            <div className='w-50 p-1 mt-1'>
                                <Form.Label><strong>Select Attorney</strong></Form.Label>
                                <Form.Select className='text-center' aria-label="Attorney" name="attorneyId"
                                    defaultValue="Select-Attorney" onChange={(e) => handleChangeAttorneyData(e.target)}>
                                    <option value="Select Attorney for Billing" disabled>Select Attorney for Billing</option>
                                    {attorneyData.map((item: Attorney) => {
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
            <table className="table text-center mt-3 table-striped">
                <thead>
                    <tr className="table-dark">
                        <th>Index</th>
                        <th>Client</th>
                        <th>Attorey</th>
                        <th>Date</th>
                        <th>Hours Worked</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {matterData.map((item: InvoicesForMatter, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.clientName}</td>
                                <td>{item.matterTitle}</td>
                                <td>{item.date}</td>
                                <td>{item.hoursWorked}</td>
                                <td>{item.totalAmount}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
            <div>
                <h4 className='text-primary text-center pt-3'>{message}</h4>
            </div>
        </div>
    )
}

export default LastWeekBillings;
