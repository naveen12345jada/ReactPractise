import React, { Component } from 'react'
import '../props.css'

export default class ClassComponentProps extends Component {
  render() {
    return (
     
        <>
       
  
        <div id='container'>
        
            <div id='MovieContainer'style={{height:"auto"}}>
                <img src={this.props.url} alt=''></img>
                 <h6>CarName{" "+this.props.name}</h6> 
                 <h6>rating{" "+this.props.rating}</h6>
                <h6>Likes{" "+this.props.Likes}</h6>
                <button >Book Car </button>  
    
            </div>
        </div>
        </>
    )
  }
}
