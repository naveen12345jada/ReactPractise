import React, { useEffect, useState } from "react";
import "../Api.css";
// import '../../../node_modules/font-awesome-icons/data/icons.json'


import 'bootstrap-icons/font/bootstrap-icons.css'
import axios from "axios";
const Delete = () => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/employees")
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
let deleteData=(id)=>{
 axios.delete(`http://localhost:4000/employees/${id}`)
 .then(()=>{
  alert("deleted record sucessfully....")
 })
 .catch((err)=>{
  console.log(err)
 })
}


  return (
    <>
      <div>
        <table>
       
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>salary</th>
              </tr>
            </thead>
            <tbody>
              {lnews.map((stu) => {
                return (
                  <>
                    <tr key={stu.id}>
                      <td>{stu.id}</td>
                      <td>{stu.name}</td>
                      <td>{stu.salary}</td>
                      <td>
                        <button className="btn btn-danger bi bi-trash" onClick={()=>{deleteData(stu.id)}}>
                       
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
        
        </table>
      </div>
    </>
  );
};

export default Delete;
