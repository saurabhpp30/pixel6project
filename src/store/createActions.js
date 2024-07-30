import { ADD_TO_LIST, REMOVE_LIST,UPDATE_LIST } from "./actionTypes";

export const Addtolist = (custarr) => {
    console.log(`hello gorilla`,custarr)
    return {
        type: ADD_TO_LIST,
        payload: custarr
    }

}
export const Removelist =(id)=>{
  console.log(id)
  return {
    type:REMOVE_LIST,
    payload: id
  }
}
export const UpdateList =(custarr)=>{
  console.log(custarr)
  return {
    type:UPDATE_LIST,
    payload: custarr
  }
}