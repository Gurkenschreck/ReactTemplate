import { combineReducers } from 'redux';

// Import custom reducers
import settingsReducer from './settings';

const combinedReducer = combineReducers({
    settings: settingsReducer
});

export default combinedReducer;