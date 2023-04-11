import { useState, useEffect } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import FirstPage from "./components/first_page"
import { title } from 'process';


function App() {

  interface Car {
    id: number;
    name: string;
  }

  const margin = {
    marginLeft: "30%",
    marginRight: "3%"
  };

  const postsList = ([
    'Tata',
    'Mahindra',
    'Toyota',
  ])

  const [carName, setCarName] = useState<Car[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [cars,setState] = useState({
    list: carName
  })

  const handleAddItem = () => {
    const newItem: Car = {
      id: Date.now(),
      name: inputValue,
    };
    setCarName([...carName, newItem]);
    setInputValue('');
  };

  const handleRemoveItem = (id: number) => {
    const updatedItems = carName.filter((item) => item.id !== id);
    setCarName(updatedItems);
    setState({list:updatedItems});

  }

  const handleAscendingList = () => {
    const ascendingList = carName.sort((a, b) => (a.name < b.name ? -1 : 1))
    setCarName(ascendingList);

    setState({list:ascendingList})
  }

  const handleDescendingList = () => {
    const descendingList = carName.sort((a, b) => (a.name > b.name ? -1 : 1))
    setCarName(descendingList)
  }

  const [sortedBy, setSortedBy] = useState<string>();
  const sortList = (sortBy: string) => {

    let sortedList: Car[] = [];

    if (sortBy === 'ascendng') {
      sortedList = [...carName].sort((a, b) => a.name.localeCompare(b.name));
    }

    else if (sortBy === 'descending') {
      sortedList = [...carName].sort((a, b) => b.name.localeCompare(a.name));
    }

    setCarName(sortedList);
    setSortedBy(sortBy);
  };

  return (
    <div >

      <form>
        <nav className="navbar">
          <h2>Cars</h2>
          <div className='const-margin'>
            <span >Sort By</span>
            <button type='button' className='button' onClick={() => sortList("ascendng")} >Ascending</button>
            <button type='button' className='button' onClick={() => sortList("descending")} >Descending</button>
          </div>
        </nav>

        <input
          type="text"
          placeholder="Enter Car Name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='button' className='button' onClick={handleAddItem} >Add Car</button>
      </form>

      <ul>
        {(
          carName.map((post) => {
            return <div key={post.id} >
              <h2>{post.name}</h2>
              <button type='button' onClick={() => handleRemoveItem(post.id)}>Delete</button>
              <hr></hr>
            </div>
          })
        )}
      </ul>


    </div>
  );
}
export default App;
