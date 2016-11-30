import * as actions from './../../../src/store/actions/settingsActions.js';

// If mocking HTTP Requests is needed
/*import nock from 'nock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);*/
// ---

describe('settings action creators', () => {

    // If mocking HTTP Requests
    /*afterEach(() => {
        nock.cleanAll()
    });*/

    it('should create test action', () => {
        const parameter = 'First test';

        const expectedActions = {
            type: 'TEST_ACTION',
            parameter 
        };

        expect(
            actions.createAction(parameter)
        ).toEqual(expectedActions);

        // If mocking HTTP Requests
        // const store = mockStore({ });
        // return store.dispatch(actions.httpAction())
        //     .then(() => {
        //         expect(store.getActions()).toEqual([expectedActions]);
        //     });
    });

});