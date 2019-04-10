import * as actionTypes from '../constants';

const initialState = {token: '', userInfo: {}};

const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return {token: action.token, userInfo: {...action.userInfo}};
        case actionTypes.LOGOUT_USER:
            return {token: '', userInfo: {}};
        case actionTypes.CHANGE_USER_INFO:
            return {...state, userInfo: {...state.userInfo, ...action.userInfo}};
        default:
            return state
    }
};

export default user;