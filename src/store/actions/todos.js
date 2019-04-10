import * as actionTypes from '../constants';

export const setTodoItems = (todos) => ({
    type: actionTypes.SET_TODOS,
    todos
});

export const addTodoItem = (todo) => ({
   type: actionTypes.ADD_TODO,
   todo
});

export const editTodoItem = (id) => ({
    type: actionTypes.EDIT_TODO,
    id
});

export const updateTodoItem = (id, todo) => ({
    type: actionTypes.UPDATE_TODO,
    id,
    todo
});

export const deleteTodoItem = (id) => ({
    type: actionTypes.DELETE_TODO,
    id
});

export const setVisibilityFilter = (filter) => ({
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
});

