import * as actionTypes from '../constants';

const initialState = actionTypes.SHOW_NEED;

const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
};

export default visibilityFilter;