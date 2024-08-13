import React, { Component } from "react";
import Student from "./Student";

export default class Unmounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

 
  changeDAta=()=>{
    this.setState({
       show:false, 
    })
  }

 
  render() {
    let msg;
    if (this.state.show) {
      msg=<Student/>;
    } else {
      msg = "";
    }
    return (
      <>
        <h1>{msg}</h1>
        <button onClick={this.changeDAta}>clickMe</button>
      </>
    );
  }
}
