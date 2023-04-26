import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { InvoicesByMatter } from './InvoicesByMatter';
const ListInvoicesByMatter: React.FC = () => {

    const [matterData, setMatterData] = useState<InvoicesByMatter[][]>();

    const getData = () => {
        axios.get('https://localhost:44318/api/Invoice/InvoicesByMatter')
            .then(res => {
                setMatterData(res.data.data);
                console.log(matterData);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className="text-center mt-2">
                <h4>Invoice List</h4>
            </div>
            <table className="table text-center mt-3 table-striped">
                <thead>
                    <tr className="table-dark">
                        <th>Matter</th>
                        <th>Index</th>
                        <th>Title</th>
                        <th>Client</th>
                        <th>Attorey</th>
                        <th>Date</th>
                        <th>Hours Worked</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {matterData?.map((client, index) => {
                        return (
                            <React.Fragment key={index}>
                                <tr>
                                    <th rowSpan={matterData[index].length + 1}>{index + 1}</th>
                                    <th colSpan={7}>{matterData[index][0].clientName}</th>
                                </tr>
                                {matterData[index].map((matter, index) => {

                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{matter.matterTitle}</td>
                                            <td>{matter.clientName}</td>
                                            <td>{matter.attorneyName}</td>
                                            <td>{matter.date}</td>
                                            <td>{matter.hoursWorked}</td>
                                            <td>{matter.totalAmount}</td>
                                        </tr>
                                    )
                                })}
                            </React.Fragment>
                            )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListInvoicesByMatter;
