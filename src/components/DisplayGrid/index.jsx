import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { Link } from 'react-router-dom';

const DisplayGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async ()=>{
      const res = await axios.get('http://localhost:3000/api/customers')
      console.log(res.data)
      setData(res.data);
    }
    fetchData()
  }, []);

  return (
    <div className="display-grid">
      <table>
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Current Organization</th>
          </tr>
        </thead>
        {data.length > 0 ?
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.phoneNumber}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.organization}</td>
            </tr>
          ))}
        </tbody>
        : <h2>No Employee data found</h2>}
      </table>
      <Link to='/'><button>Add new customer</button></Link>
    </div>
  );
};

export default DisplayGrid;
