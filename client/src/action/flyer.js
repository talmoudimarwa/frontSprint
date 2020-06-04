import {ADD_FLYER,DELETE_FLYER}  from './type'

export const addFlyer=(payload)=> {
    return {type: ADD_FLYER,
    payload}}


    export const deleteFlyer=(id)=> {
        // console.log("paylod",payload)
        return{type:DELETE_FLYER,
            id} }