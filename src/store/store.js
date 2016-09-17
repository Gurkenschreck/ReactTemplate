import { createStore } from 'redux';

import reducer from '../reducer/combined';

const store = createStore(reducer);

export default store;