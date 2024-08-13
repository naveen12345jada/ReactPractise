import React, { Component } from 'react'
import './Api.css'
import axios from 'axios'
export default class AddEmployee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id: "",
         name:"",
         salary:""
      }
    }

    changeData=(e)=>{
      this.setState({
        [e.target.name]:e.target.value,
      })

    }

    submitHandler=(e)=>{
      let {id,name,salary}=this.state;
     e.preventDefault();

     axios.post("http://localhost:4000/employees",{id,name,salary})
     .then((res)=>{
    alert('student added sucessfully.......')

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

    let {id,name,salary}=this.state;
    return (

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
    )
  }
}
