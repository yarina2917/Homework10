import React from 'react';

const filterButton = (props) => (
    <button
        className={props.activeFilter === props.type ? 'active' : ''}
        onClick={() => props.filterTodo(props.type)}>
        {props.children}
    </button>
);

export default filterButton;