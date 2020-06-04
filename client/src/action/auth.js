import {REGISTER_SUCCESS,LOGOUT,LOGIN_SUCCESS} from './type'
import { setAlert } from './alert';




export const register=(payload)=> {
  return{type: REGISTER_SUCCESS,
  payload}}
       

    export const login =(payload)=>{
      return {type: LOGIN_SUCCESS,
        payload}}
    
 


export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
  };
