import reducer from '../../store/reducers/user';
import * as types from '../../store/constants/index';

describe('user reducer', () => {

    it('should return the initial state', () => {
        const initialUser = {token: '', userInfo: {}};
        expect(reducer(undefined, {})).toEqual(initialUser);
    });

    it('should handle LOGIN_USER', () => {
        const initialUser = {token: '', userInfo: {}};
        const loginUser = {
            type: types.LOGIN_USER,
            token: 'token',
            userInfo: {name: 'name', surname: 'surname'}
        };
        const expected = {
            token: 'token',
            userInfo: {name: 'name', surname: 'surname'}
        };
        expect(reducer(initialUser, loginUser)).toEqual(expected);
    });

    it('should handle LOGOUT_USER', () => {
        const initialUser = {
            token: 'token',
            userInfo: {name: 'name', surname: 'surname'}
        };
        const expected = {token: '', userInfo: {}};
        expect(reducer(initialUser, {type: types.LOGOUT_USER})).toEqual(expected);
    });

    it('should handle CHANGE_USER_INFO', () => {
        const initialUser = {
            token: 'token',
            userInfo: {name: 'name', surname: 'surname'}
        };
        const changedUser = {
            type: types.CHANGE_USER_INFO,
            userInfo: {name: 'changedName', surname: 'surname'}
        };
        const expected = {
            token: 'token',
            userInfo: {name: 'changedName', surname: 'surname'}
        };
        expect(reducer(initialUser, changedUser)).toEqual(expected);
    });
});