import React, { Component } from 'react'

export default class ClassComponentAssignment extends Component {
 name="Employee Details"
constructor(){
    super();
    this.state={
        employeeId:15020,
        employeeName:"Jada Naveen Kumar",
        employeeSal:50000,
        employeeAddress:"Hyderabad",
        Company :"Publicis sapient",

    }
}
    changeEmployeeData=()=>{
        this.setState({
            employeeId:15020,
            employeeName:"Jada Naveen Kumar",
            employeeSal:80000,
            employeeAddress:"Delhi",
            Company :"Cognizant"
        })
      
    }


  render() {
    return (
        <>
      <div style={{fontSize:"30px",textAlign:"center",color:"chocolate" }}>{this.name}</div>
<h1 style={{color:'orange',textAlign:"center"}}> employee Id:  { this.state.employeeId}<br/> employeeName: {this.state.employeeName} <br/> employeeSal: {this.state.employeeSal} <br/>  employeeAddress: {this.state.employeeAddress} <br/> Company:  {this.state.Company}<br/> </h1>


<button onClick={this.changeEmployeeData} style={{color:'green',height:"100px",marginLeft:"45vw"}}> Change Employee Data</button>
      </>
    )
  }
}
