import { dispatch } from "./store";
import { ADD_NEW_TASK, REMOVE_TASK, USER_TASK } from "./types";

export const addNewTask = (value) => {
    dispatch({type: ADD_NEW_TASK, payload: value});
}

export const removeTask = (index) => {
    dispatch({type: REMOVE_TASK, payload: index});
}

export const UserTask = (user) => {
    dispatch({type: USER_TASK, payload: user}); 
}