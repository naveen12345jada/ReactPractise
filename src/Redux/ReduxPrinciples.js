import { configureStore } from "@reduxjs/toolkit";

const buy_mobile = 'Buy_Mobile'; //action

function buymobile() {
  // action creator
  return {
    type: buy_mobile,
  };
}

const intialMobileState = {
  //initial mobile state
  noOfMobiles: 40,
};

const mobileReducer = (state = intialMobileState, action) => { //reducer creation  
  switch (action.type) {
    case buy_mobile:
      return {
        noOfMobiles: state.noOfMobiles - 1,
      };

    default:
      return state
     
  }
};

const store =configureStore({reducer:mobileReducer})
console.log("initial count is ",store.getState());

store.subscribe(()=>
    {console.log("updated count is ", store.getState())
    })

store.dispatch(buymobile())
store.dispatch(buymobile())
store.dispatch(buymobile())
store.dispatch(buymobile())

