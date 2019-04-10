import React from 'react';
import FilterButton from './FilterButton/FilterButtonContainer';
import * as actionTypes from '../../../store/constants/index';
import './FilterButtons.scss';

const filterButtons = () => (
    <div className="filterButtons">
        <FilterButton type={actionTypes.SHOW_NEED}>NEED</FilterButton>
        <FilterButton type={actionTypes.SHOW_DONE}>DONE</FilterButton>
        <FilterButton type={actionTypes.SHOW_ALL}>ALL</FilterButton>
    </div>
);

export default filterButtons