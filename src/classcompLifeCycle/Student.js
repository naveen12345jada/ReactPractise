import React, { Component } from 'react'

export default class Student extends Component {

    componentWillUnmount=()=>{
        alert("component is going to  be deleted ")
      }
  render() {
    return (
      <div>
        <h1>hello student</h1>
      </div>
    )
  }
}
