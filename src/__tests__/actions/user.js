import * as actions from '../../store/actions/user';
import * as types from '../../store/constants/index';

describe('actions', () => {

    it('should create an action to login user', () => {
        const token = 'token';
        const userInfo = 'user info';
        const expectedAction = {
            type: types.LOGIN_USER,
            token,
            userInfo
        };
        expect(actions.loginUser(token, userInfo)).toEqual(expectedAction)
    });

    it('should create an action to logout user', () => {
        const expectedAction = {
            type: types.LOGOUT_USER,
        };
        expect(actions.logoutUser()).toEqual(expectedAction)
    });

    it('should create an action to update user info', () => {
        const userInfo = 'user info';
        const expectedAction = {
            type: types.CHANGE_USER_INFO,
            userInfo
        };
        expect(actions.changeUserInfo(userInfo)).toEqual(expectedAction)
    });
});
