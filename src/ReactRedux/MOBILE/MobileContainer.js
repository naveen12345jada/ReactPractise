import React, { useState } from 'react'
import { connect } from 'react-redux'
import buyMobile from './MobileActionCreator'

const MobileContainer = (props) => {
  const[number,setNumber]=useState(1);
  return (
    <div>
      <h1>  No.ofMobiles : {props.noOFMobiles}</h1>
      <input type='text' name='number'value={number} onChange={(e)=>setNumber(e.target.value)}></input>
    <button onClick={()=>props.buyMobile(number)}>BuyNow</button>

    </div>

  )
}

const mapStateToProps=(state)=>{
  return{
    noOFMobiles:state.mobile.noOFMobiles,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    buyMobile: (number)=>{
      dispatch(buyMobile(number))
    }
  }
}

export default  connect (mapStateToProps,mapDispatchToProps) (MobileContainer)