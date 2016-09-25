import { combineReducers } from 'redux';

// Import custom reducers
import settings from './settingsReducer';

const combinedReducer = combineReducers({
    settings
});

export default combinedReducer;