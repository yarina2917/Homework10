import * as actionTypes from '../constants';

export const loginUser = (token, userInfo) => ({
    type: actionTypes.LOGIN_USER,
    token,
    userInfo
});

export const logoutUser = () => ({
    type: actionTypes.LOGOUT_USER,
});

export const changeUserInfo = (userInfo) => ({
    type: actionTypes.CHANGE_USER_INFO,
    userInfo
});

