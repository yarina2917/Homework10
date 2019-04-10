import * as actionTypes from '../constants';

const initialState = [];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TODOS:
            return action.todos;
        case actionTypes.ADD_TODO:
            return [...state, action.todo];
        case actionTypes.EDIT_TODO:
            return state.map(todo => (
                todo._id === action.id ? {...todo, selected: true} : todo
            ));
        case actionTypes.UPDATE_TODO:
            return state.map(todo => (
                todo._id === action.id ? {...todo, ...action.todo} : todo
            ));
        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo._id !== action.id);
        default:
            return state;
    }
};

export default todos