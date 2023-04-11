import { useState, useEffect } from 'react';
import './App.css';
import './index.css'

function App() {

  interface Car {
    id: number;
    name: string;
    model_name: string;
  }

  const margin = {
    marginLeft: "30%",
    marginRight: "3%"
  };

  const [carName, setCarName] = useState<Car[]>([]);
  const [brandName, setBrandName] = useState<string>('');
  const [modelName, setModelName] = useState<string>('');

  const handleAddItem = () => {
    const newItem: Car = {
      id: Date.now(),
      name: brandName,
      model_name:modelName,
    };
    setCarName([...carName, newItem]);
    setBrandName('');
  };

  const handleRemoveItem = (id: number) => {
    const updatedItems = carName.filter((item) => item.id !== id);
    setCarName(updatedItems);
  }

  const [sortedBy, setSortedBy] = useState<string>();
  const handleSortList = (sortBy: string) => {

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

      <nav className="navbar">
        <h2>Cars</h2>
        <div className='const-margin'>
          <span >Sort By</span>
          <button type='button' className='button' onClick={() => handleSortList("ascendng")} >Ascending</button>
          <button type='button' className='button' onClick={() => handleSortList("descending")} >Descending</button>          
        </div>
      </nav>

      <div className='form-class'>
      <form>
        <input type="text" placeholder="Enter Car Name" value={brandName} onChange={(e) => setBrandName(e.target.value)}/>
        <input type="text" placeholder="Enter Model Name" value={modelName} onChange={(e) => setModelName(e.target.value)}/>
        <button type='button' className='button' onClick={handleAddItem} >Add Car</button>
      </form>
      </div>

      <ul>
        {(
          carName.map((post) => {
            return <div key={post.id} className='styleCard' >
              <h2 className='styleCardTitle'>Brand Name : <strong>{post.name}</strong></h2>
              <h4 className='styleCardText'>Model Name : {post.model_name}</h4>
              <button className='card-button' type='button' onClick={() => handleRemoveItem(post.id)}>Delete</button>
            </div>
          })
        )}
      </ul>

    </div>
  );
}
export default App;
