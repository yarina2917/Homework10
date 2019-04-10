import React, {useState} from 'react';

const todoItem = ({todo, checkTodo, editTodo, saveTodo, deleteTodo}) => {
    const {_id: id, title, description, status, selected} = todo;
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(title);

    const editInputs = (
        <div className='editInputs'>
            <input
                type="text"
                defaultValue={title}
                onChange={(e) => setNewTitle(e.target.value)}/>
            <input
                type="text"
                defaultValue={description}
                onChange={(e) => setNewDescription(e.target.value)}/>
        </div>
    );

    const item = (
        <div className={`item ${status === 'done' ? 'checked' : ''}`}>
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
        </div>
    );

    return (
        <li>
            {selected ? editInputs : item}
            <div className="itemButtons">
                {selected
                    ? <button onClick={() => saveTodo(id, newTitle, newDescription)} className='todoSave'>Save</button>
                    : <button onClick={() => editTodo(id)} className='todoEdit'>Edit</button>
                }
                <button onClick={() => checkTodo(id, status)} className='todoCheck'>Check</button>
                <button onClick={() => deleteTodo(id)} className='todoDelete'>Delete</button>
            </div>
        </li>
    )
};

export default todoItem;