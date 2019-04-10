import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionTypes from "../../store/constants";
import { setTodoItems, addTodoItem, deleteTodoItem, editTodoItem, updateTodoItem } from "../../store/actions/todos";
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case actionTypes.SHOW_ALL:
            return todos;
        case actionTypes.SHOW_DONE:
            return todos.filter(todo => todo.status === 'done');
        case actionTypes.SHOW_NEED:
            return todos.filter(todo => todo.status === 'need');
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    token: state.user.token
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setTodoItems,
        addTodoItem,
        deleteTodoItem,
        editTodoItem,
        updateTodoItem,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);