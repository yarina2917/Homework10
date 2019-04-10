import reducer from '../../store/reducers/todos';
import * as types from '../../store/constants/index';

describe('todos reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    });

    it('should handle SET_TODOS', () => {
        const todos = [
            {_id: 0, title: 'todo'},
            {_id: 1, title: 'tod1'}
        ];
        const addedTodos = {
            type: types.SET_TODOS,
            todos
        };
        expect(reducer([], addedTodos)).toEqual(todos);
    });

    it('should handle ADD_TODO', () => {
        const newTodo = {
            type: types.ADD_TODO,
            todo: {_id: 0, title: 'todo'},
        };
        expect(reducer([], newTodo)).toEqual([{_id: 0, title: 'todo'}]);

        const initialTodos = [{_id: 0, title: 'todo'}];
        const newTodo1 = {
            type: types.ADD_TODO,
            todo: {_id: 1, title: 'todo1'}
        };
        const expected = [
            {_id: 0, title: 'todo'},
            {_id: 1, title: 'todo1'}
        ];

        expect(reducer(initialTodos, newTodo1)).toEqual(expected)
    });

    it('should handle EDIT_TODO', () => {
        const initialTodos = [
            {_id: 0, selected: false},
            {_id: 1, selected: false}
        ];
        const editedTodo = {
            type: types.EDIT_TODO,
            id: 0,
        };
        const expected = [
            {_id: 0, selected: true},
            {_id: 1, selected: false}
        ];
        expect(reducer(initialTodos, editedTodo)).toEqual(expected);
    });

    it('should handle UPDATE_TODO', () => {
        const initialTodos = [
            {_id: 0, title: 'todo', selected: false},
            {_id: 1,  title: 'todo1', selected: false}
        ];
        const updatedTodo = {
            type: types.UPDATE_TODO,
            id: 1,
            todo: {title: 'todo2', selected: true}
        };
        const expected = [
            {_id: 0, title: 'todo', selected: false},
            {_id: 1,  title: 'todo2', selected: true}
         ];
        expect(reducer(initialTodos,updatedTodo)).toEqual(expected);
    });

    it('should handle DELETE_TODO', () => {
        const initialTodos = [
            {_id: 0, title: 'todo'},
            {_id: 1, title: 'todo1'}
        ];
        const deletedTodo = {
            type: types.DELETE_TODO,
            id: 0,
        };
        const expected = [{_id: 1, title: 'todo1'}];
        expect(reducer(initialTodos, deletedTodo)).toEqual(expected);
    });

});