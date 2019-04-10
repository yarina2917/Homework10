import reducer from '../../store/reducers/visibilityFilter';
import * as types from '../../store/constants/index';

describe('filter reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual('SHOW_NEED')
    });

    it('should handle SET_VISIBILITY_FILTER', () => {
        const changeFilter = {
            type: types.SET_VISIBILITY_FILTER,
            filter: 'SHOW_DONE'
        };
        expect(reducer('SHOW_NEED', changeFilter)).toEqual('SHOW_DONE');
    });

});