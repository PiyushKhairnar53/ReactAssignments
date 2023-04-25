import React from 'react';
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Matter } from './Matter';

const ViewMatter: React.FC = () => {

  const [matterData, setMatterData] = useState([]);
  const navigate = useNavigate();

  const getData = () =>{
    axios.get('https://localhost:44318/api/Matter')
    .then(res => {
      setMatterData(res.data.data)
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
      {/* {loading && <Loading />} */}
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

export default ViewMatter;
