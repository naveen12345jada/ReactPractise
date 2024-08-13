import axios from 'axios';
import React, { Component } from 'react'
import  './Api.css'
export default class UpdateStudent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        student:[],
        id: "",
      name:"",
      salary:""
      }
    }
    componentDidMount() {  // get method 
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

      changeData=(e)=>{   // form is non editable for editing purpose we have taken this method at first when we bind the state
        this.setState({
          [e.target.name]:e.target.value,
        })
  
      }


      editData(id){   //edit method  for getting the data in the form when we  click the update button  
        axios
        .get(`http://localhost:4000/employees/${id}`)
        .then((res)=>{
         this.setState({
          id:res.data.id,
          name:res.data.name,
          salary:res.data.salary,
         })
      })
         .catch((err)=>{
           console.log(err);
         })
        
    }
    
  
      submitHandler=(e)=>{
        let {id,name,salary}=this.state;
       e.preventDefault();
  
       axios.put(`http://localhost:4000/employees/${id}`,{id,name,salary})
       .then((res)=>{
      alert('student updated  sucessfully.......')
  
      this.setState({
        id: "",
        name:"",
        salary:""
      })
       })
       .catch((e)=>{
      console.log(e);
       })
       
      }  

 
render() {
    let student = this.state.student;  //for mapping of the api
    let {id,name,salary}=this.state; //for binding the state  for input fields 
    return (
      <>
      <div>
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
        </div>

        <div className='form' >
         <form onSubmit={this.submitHandler}>
           <div>
            <input type='text' name='id' placeholder='id' value={id} onChange={this.changeData}></input>
           </div>
           <div>
            <input type='text' name='name' placeholder='Entername' value={name} onChange={this.changeData}></input>
           </div>
           <div>
            <input type='text' name='salary' placeholder='Entersalary' value={salary} onChange={this.changeData}></input>
           </div>
           <div>
            <input type='submit' value="ADD STUDENT"/>
           </div>
         </form>
     </div>





      </>
    );
  }
}
 
  
