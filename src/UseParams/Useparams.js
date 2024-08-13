import React, { useEffect, useState } from 'react';
import {NavLink} from"react-router-dom"
import axios from 'axios';

const Useparams = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      }).catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <ol>
        {data.map((item) => (
          <li key={item.id}>
           <NavLink to={`/details/${item.id}`}> {item.title}</NavLink> 
          </li>
        ))}
      </ol>

      
    </>
  );
};

export default Useparams;
