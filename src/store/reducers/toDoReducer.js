import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, SET_TODO_FILTER } from "../actionTypes/toDoActionTypes";
import { toDoState } from "../state/toDoState";

function todoReducer(state=toDoState,action){
    switch (action.type){
        case ADD_TODO:
            return {...state,todoList:[...state.todoList,action.payload]}
        case DELETE_TODO:
            return {...state,todoList:state.todoList.filter((item)=>item.id!==action.payload)}
        case SET_TODO_FILTER:
            return {...state,todoFilter:action.payload}
        case COMPLETE_TODO:
            const arr=[...state.todoList]
            const findedIndex=arr.findIndex((item)=>item.id===action.payload.id)
            arr[findedIndex].complete=action.payload.complete
            return {...state,toDoList:arr}
        default:
            return state
    }
}
export default todoReducer