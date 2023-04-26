import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { InvoicesForMatter } from './InvoicesForMatter';
import { Button, Form } from 'react-bootstrap';
import { Matter } from '../Matter/Matter';

const ListInvoicesForMatter: React.FC = () => {

    const [matterData, setMatterData] = useState([]);
    const [matterTitle, setMatterTitle] = useState([]);
    const [message, setMessage] = useState<string>("");


    const setMatters = () => {
        axios.get('https://localhost:44318/api/Matter')
            .then(res => {
                setMatterTitle(res.data.data);
            })
            .catch(err => console.log(err))
    }

    const getInvoicesForMatter = (id: number) => {

        axios.get(`https://localhost:44318/api/Invoice/InvoicesForMatter/${id}`)
            .then(res => {
                setMatterData(res.data.data);
                setMessage("");
            })
            .catch(err => {
                setMatterData([])
                setMessage("This matter has no invoices");
                console.log(err)
            })
    }

    const handleChangeMatterTitle = (e: any) => {
        getInvoicesForMatter(e.value);
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
                                <Form.Label><strong>Select Matter</strong></Form.Label>
                                <Form.Select className='text-center' aria-label="Matter" name="matterId"
                                    defaultValue="Select-Matter" onChange={(e) => handleChangeMatterTitle(e.target)}>
                                    <option value="Select Matter for Invoices" disabled>Select Matter for Invoices</option>
                                    {matterTitle.map((item: Matter) => {
                                        return (<option key={item.id} value={item.id} >
                                            {item.title}
                                        </option>);
                                    })}
                                </Form.Select>
                            </div>
                        </div>
                    </Form.Group>

                </Form>
            </div>

            <div className="text-center mt-2">
                <h4>Invoice List</h4>
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
                    {matterData.map((item: InvoicesForMatter, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.clientName}</td>
                            <td>{item.attorneyName}</td>
                            <td>{item.date}</td>
                            <td>{item.hoursWorked}</td>
                            <td>{item.totalAmount}</td>
                        </tr>))}
                </tbody>
            </table>
            <h4 className='text-primary text-center pt-3'>{message}</h4>
        </div>
    )
}

export default ListInvoicesForMatter;
