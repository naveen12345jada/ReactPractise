import React, { Component } from 'react'
import axios from 'axios'

import './Api.css'
export default class DeleteStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: [],
     
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/employees")
      .then((res) => {
        this.setState({
          student: res.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteData = (id) => {
    axios
      .delete(`http://localhost:4000/employees/${id}`)
    // .delete("http://localhost:4000/employees/"+id)  old way of deleting
      .then((res) => {
        alert("student deleted sucessfully.......");
      })
      .catch((err) => {
        console.log(err);
      }); 
  };

  
 
  render() {
    let student = this.state.student;
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>salary</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {student.map((emp) => {
              return (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.salary}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteData(emp.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        this.editData(emp.id);
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
 
  
