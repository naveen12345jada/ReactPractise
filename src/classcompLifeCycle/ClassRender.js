import React, { Component } from 'react'

export default class ClassRender extends Component {
  constructor() {
    super(props)
  
    this.state = {
       
    }
    console.log("this is from constructor")
  }
static getDerivedStateFromProps(){
  console.log("this is from  getDerivedStateFromProps ")
  return null;
}

componentDidMount(){
   console.log("this is from component did mount");
}

  render() {
    console.log('this is from render method')
    return (
      <div>ClassRender</div>
      
    )
  }
}
