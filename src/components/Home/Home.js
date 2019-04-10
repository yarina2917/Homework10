import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const home = () => (
    <div className='homeNav'>
        <Link to='/todo'>Todolist</Link>
        <Link to='/login'>Login</Link>
        <Link to='/registration'>Registration</Link>
    </div>
);

export default home;