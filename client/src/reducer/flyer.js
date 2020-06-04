import {
    ADD_FLYER,
    LOGOUT,  
    DELETE_FLYER
    } from '../action/type';
    import  { TabFlyerHelper } from '../component/TabFlyer.js';
  
    const initialState = {
      TabFlyer: [],

     };
     export default function(state = initialState, action) {
   
       const { type, payload,id } = action;
   
       switch (type) {
   
       
           case ADD_FLYER :
               return { ...state, TabFlyer: state.TabFlyer.concat(payload) }  // obj
               case DELETE_FLYER:
                return { ...state, TabFlyer: state.TabFlyer.filter((el) => el.id!== id) }
   
         case LOGOUT:
        
         default:
           return state;
       }
     }