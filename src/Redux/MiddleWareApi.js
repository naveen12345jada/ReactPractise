import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { thunk } from "redux-thunk";

const initialState={    //initial state
    loading:false,
    users:[],
    err:"",
}

//Actions

const fetch_user_request="Fetch_USER_REQUEST";
const fetch_user_success="Fetch_USER_SUCCESS";
const fetch_user_failure="Fetch_USER_FAILURE";

//Action Creators

function fetchUserRequest(){
    return{
        type:fetch_user_request
    }
}

function fetchUserSuccess(users){
    return{
        type:fetch_user_success,
        payload:users
    }
}

function fetchUserFailure(err){
    return{
        type:fetch_user_failure,
        payload:err
    }
}

//Reducers

const reducer1=(state=initialState,action)=>{
    switch(action.type){
        case fetch_user_request:
            return {
                loading:true
            }
            case fetch_user_success:
            return {
                users:action.payload,
                err:""
            } 

            case fetch_user_failure:
                return {
                    err:action.payload,
                    users:[]
                } 
               default:
                return state
   
            }


        }


        const fetchUsers=()=>{
            return function(dispatch){
                dispatch(fetchUserRequest());
                axios.get("https://jsonplaceholder.typicode.com/users")
                .then((res)=>{
                  let users=res.data.map((users)=>users.name)
                  dispatch(fetchUserSuccess(users))
                }).catch((err)=>{
                    dispatch(fetchUserFailure(err))
                })
            }
        }





        const store =configureStore({reducer:reducer1},applyMiddleware(thunk));
        console.log(store.getState());

        store.subscribe(()=>{
            console.log(store.getState());
            
        })

        store.dispatch(fetchUsers())
        




