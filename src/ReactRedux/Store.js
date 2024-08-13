import { combineReducers } from "redux";
import MobileReducer from "./MOBILE/MobileReducer";
import LaptopReducer from "./Laptop/LaptopReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootreducer=combineReducers({
    mobile:MobileReducer,
    laptop:LaptopReducer
})

const store=configureStore({reducer:rootreducer})

export default store;