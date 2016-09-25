// Define settings action creators
export function createAction(parameter){
    return action(parameter);
}

function action(parameter) {
    return {
        type: 'TEST_ACTION',
        parameter
    }
}