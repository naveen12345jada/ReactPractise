import React, { Component } from 'react'

export default class UpdatingLifecycleClasscomp extends Component {
    constructor(props){
        super(props)
        this.state=({
            name:"naveenKumar"
        })
    }
 static getDerivedStateFromProps(){
    console.log("this is from getDerivedStateFromProps ");
    return null;
 }
 shouldComponentUpdate(){
    console.log("this is from  shouldComponentUpdate ");
    return true
 
 }
changeData=()=>{
    this.setState({
     name:"pavan"
    })
}

getSnapshotBeforeUpdate=(prevProps,prevState)=>{
  console.log("before updating the state is "+prevState.name);
  return null;
}
componentDidUpdate=(prevProps,prevState)=>{
  console.log("after  updating the state is "+this.state.name);
 
}

  render() {
  console.log("this is from render method");
    return (
        <>
      <div> welcome to elearn{this.state.name}</div>
      <button onClick={this.changeData}>changedata</button>
      </>
    )
  }
}
