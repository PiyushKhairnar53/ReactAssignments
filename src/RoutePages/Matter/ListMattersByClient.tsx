import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MattersByClient } from './MatterByClient';

const ListMatterByClient: React.FC = () => {

    const [matterData, setMatterData] = useState<MattersByClient[][]>();

    const getData = () => {
        axios.get('https://localhost:44318/api/Matter/MattersByClient')
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
                <h4>Matter List</h4>
            </div>
            <table className="table text-center mt-3 table-striped">
                <thead>
                    <tr className="table-dark">
                        <th>Client</th>
                        <th>Index</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Jurisdiction Area</th>
                        <th>Billing Attorney</th>
                        <th>Responsible Attorney</th>
                    </tr>
                </thead>
                <tbody>
                    {matterData?.map((client, index) => {
                        return (
                            <React.Fragment key={index}>
                                <tr>
                                    <th rowSpan={matterData[index].length + 1}>{index + 1}</th>
                                    <th colSpan={6}>{matterData[index][0].clientName}</th>
                                </tr>
                                {matterData[index].map((matter, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{matter.title}</td>
                                            <td>{matter.category}</td>
                                            <td>{matter.jurisdictionArea}</td>
                                            <td>{matter.billingAttorneyName}</td>
                                            <td>{matter.responsibleAttorneyeName}</td>
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

export default ListMatterByClient;
