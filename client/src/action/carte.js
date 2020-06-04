import {ADD_CARTE,DELETE_CARTE}  from './type'

export const addCarte=(payload)=> {
    console.log("paylod",payload)
    return{type: ADD_CARTE,
        payload} }
        export const deleteCarte=(id)=> {
            // console.log("paylod",payload)
            return{type:DELETE_CARTE,
                id} }