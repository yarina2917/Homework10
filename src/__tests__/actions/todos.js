import * as actions from '../../store/actions/todos';
import * as types from '../../store/constants/index';

describe('actions', () => {

    it('should create an action to set todos', () => {
        const todos = 'set todos';
        const expectedAction = {
            type: types.SET_TODOS,
            todos
        };
        expect(actions.setTodoItems(todos)).toEqual(expectedAction)
    });

    it('should create an action to add a todo', () => {
        const todo = 'add todo';
        const expectedAction = {
            type: types.ADD_TODO,
            todo
        };
        expect(actions.addTodoItem(todo)).toEqual(expectedAction)
    });

    it('should create an action to edit a todo', () => {
        const id = 1;
        const expectedAction = {
            type: types.EDIT_TODO,
            id,
        };
        expect(actions.editTodoItem(id)).toEqual(expectedAction)
    });

    it('should create an action to update a todo', () => {
        const todo = 'update todo';
        const id = 1;
        const expectedAction = {
            type: types.UPDATE_TODO,
            id,
            todo
        };
        expect(actions.updateTodoItem(id, todo)).toEqual(expectedAction)
    });

    it('should create an action to delete a todo', () => {
        const id = 1;
        const expectedAction = {
            type: types.DELETE_TODO,
            id,
        };
        expect(actions.deleteTodoItem(id)).toEqual(expectedAction)
    });

    it('should create an action to filter a todo', () => {
        const filter = 'filter';
        const expectedAction = {
            type: types.SET_VISIBILITY_FILTER,
            filter,
        };
        expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction)
    })
});
