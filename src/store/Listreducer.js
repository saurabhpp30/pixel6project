import { ADD_TO_LIST, REMOVE_LIST, UPDATE_LIST } from "./actionTypes";

const Initialstate = {
    Customerlist: JSON.parse(localStorage.getItem('cst'))||[]
}
export const Listreducer = (state = Initialstate, action) => {
    
    console.log(action.payload)
    console.log(state)
    switch (action.type) {
        case ADD_TO_LIST:
            localStorage.setItem("cst",JSON.stringify([...state.Customerlist,action.payload]))
            return {
                ...state, Customerlist: [...state.Customerlist, action.payload]
            }
            
        case REMOVE_LIST:
            const updatedList = state.Customerlist.filter(customer => customer.id !== action.payload);
            localStorage.setItem("cst",JSON.stringify(updatedList))
            return {
                ...state,
                Customerlist: updatedList,
            };
        case UPDATE_LIST:
            const editTask = state.Customerlist.map((customer) =>
                customer.id === action.payload.id ? action.payload : customer
            );
            localStorage.setItem("cst",JSON.stringify())
            return {
                ...state,
                Customerlist: editTask,
            };

        default: return state
    }
}