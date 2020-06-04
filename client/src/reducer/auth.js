import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
    
  } from '../action/type';
  import TabLogin from '../component/TabLogin.js';
  
  const initialState = {
   TabLogin:[],

    
  };
  export default function(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {

    
        case REGISTER_SUCCESS :
            return { ...state, TabLogin: state.TabLogin.concat(payload) }  // obj

      case LOGIN_SUCCESS:
        return {
          ...state,
          ...payload,
    isAuthenticated :null
        };
       case REGISTER_FAIL:
      case LOGOUT:
     
      default:
        return state;
    }
  }
  