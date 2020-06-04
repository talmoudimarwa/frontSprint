import {
  ADD_CARTE,
  LOGOUT,
  DELETE_CARTE

    
  } from '../action/type';
  import  { TabCarteHelper } from '../component/TabCarte.js';

  const initialState = {
    TabCarte: [],

 
     
   };
   export default function(state = initialState, action) {
 
     const { type, payload ,id} = action;
 
     switch (type) {
 
     
         case ADD_CARTE :
             return { ...state, TabCarte: state.TabCarte.concat(payload) }  // obj
             case DELETE_CARTE:
              return { ...state, TabCarte: state.TabCarte.filter((el) => el.id!== id) }
       case LOGOUT:
      
       default:
         return state;
     }
   }