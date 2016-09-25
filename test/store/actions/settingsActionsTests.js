import expect from 'expect';

import * as actions from './../../../src/store/actions/settingsActions.js';


describe('settings action creators', () => {
    
    it('should create test action', () => {
        const parameter = 'First test';

        const expectedActions = {
            type: 'TEST_ACTION',
            parameter 
        };

        expect(
            actions.createAction(parameter)
        ).toEqual(expectedActions);
    });

});