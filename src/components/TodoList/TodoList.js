import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import NavigationItems from '../Navigation/NavigationItemsContainer';
import AddTodoForm from './AddTodo/AddTodo';
import Filter from './FilterButtons/FilterButtons';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.scss';
import * as apiTodo from '../../services/todos';

const todoList = (props) => {

    useEffect(() => {
        apiTodo.getTodos(props.token)
            .then(res => {
                props.setTodoItems(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[]);

    const checkedTodoHandler = (id, status) => {
        const updatedTodo = {
            status: (status === 'need') ? 'done' : 'need'
        };
        apiTodo.updateTodo(id, updatedTodo, props.token)
            .then(res => {
                props.updateTodoItem(id, updatedTodo)
            })
            .catch(err => {
                console.log(err)
            })
    };

    const deleteTodoHandler = (id) => {
        apiTodo.deleteTodo(id, props.token)
            .then(res => {
                props.deleteTodoItem(id)
            })
            .catch(err => {
                console.log(err)
            })
    };

    const editTodoHandler = (id) => {
        props.editTodoItem(id);
    };

    const updateTodoHandler = (id, newTitle, newDescription) => {
        const updatedTodo = {
            title: newTitle,
            description: newDescription,
            selected: false
        };
        apiTodo.updateTodo(id, updatedTodo, props.token)
            .then(res => {
                props.updateTodoItem(id, updatedTodo)
            })
            .catch(err => {
                console.log(err)
            })
    };

    let todos = null;
    if (props.todos.length !== 0) {
        todos = props.todos.map((todo) => (
            <TodoItem
                key={todo._id}
                todo={todo}
                checkTodo={checkedTodoHandler}
                editTodo={editTodoHandler}
                saveTodo={updateTodoHandler}
                deleteTodo={deleteTodoHandler}
            />
        ))
    }

    return (
        <React.Fragment>
            <NavigationItems/>
            <AddTodoForm token={props.token} addTodoItem={props.addTodoItem}/>
            <Filter/>
            <ul className="todolist">
                {todos}
            </ul>
        </React.Fragment>
    )
};

todoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired,
    })),
    token: PropTypes.string.isRequired
};

export default todoList;
