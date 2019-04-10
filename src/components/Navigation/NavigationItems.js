import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItems.scss';

const navigationItems = ({logoutUser}) => (
    <div className='nav'>
        <NavLink to='/' exact>Home</NavLink>
        <NavLink to='/todo'>Todolist</NavLink>
        <NavLink to='/user-profile'>My profile</NavLink>
        <NavLink to='/logout' onClick={logoutUser}>Logout</NavLink>
    </div>
);

export default navigationItems;


