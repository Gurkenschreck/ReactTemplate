import { combineReducers } from 'redux';

// Import custom reducers
import settings from './settings';

const combinedReducer = combineReducers({
    settings: settings
});

export default combinedReducer;