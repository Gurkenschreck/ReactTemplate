import deepFreeze from 'deep-freeze-node';

import reducer from './../../../src/store/reducer/settingsReducer.js'

describe('settings reducer', () => {

    const defaultState = {  };
    deepFreeze(defaultState);

    it('should return default state', () => {
        const returnState = reducer(undefined, { type: 'NOT_PRESENT' });
        expect(returnState).toEqual(defaultState);
    });

});