import React, {useState} from 'react';
import './AddTodo.scss';
import * as apiTodo from "../../../services/todos";

const addTodo = ({addTodoItem, token}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addTodoHandler = (event) => {
        event.preventDefault();
        if (title.trim().length === 0) {
            return
        }
        const todo = {
            title: title,
            description: description,
            status: 'need',
            selected: false
        };
        apiTodo.postTodo(todo, token)
            .then(res => {
                addTodoItem(res.data);
                setTitle('');
                setDescription('');
            })
            .catch(err => {
                console.log(err)
            });
    };

   return (
       <form className="addTodoForm" onSubmit={addTodoHandler}>
           <input
               onChange={(e) => setTitle(e.target.value)}
               value={title}
               placeholder='Title'
               className='titleField'
           />
           <input
               onChange={(e) => setDescription(e.target.value)}
               value={description}
               placeholder='description'
               className='descriptionField'
           />
           <button type="submit">Add</button>
       </form>
   )
};

export default React.memo(addTodo)