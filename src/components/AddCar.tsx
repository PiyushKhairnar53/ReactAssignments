import React from "react";
import { useState } from "react";

const AddCar = () =>{
    const [title, setTitle] = useState('');
    const [body, setDescription] = useState('');
   
  
    return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form>
          <label>Car title:</label>
          <input 
            type="text" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Car Description:</label>
          <textarea
            required></textarea>
          <button>Add Blog</button>
        </form>
      </div>
    );
  }
   
  export default AddCar;