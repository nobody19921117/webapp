import tabReducer from './tabReducer.js';

import { combineReducers } from 'redux';//当页面多余一个reducer时，就要调用combinereducers

const reducers = combineReducers({
    tabReducer
})

export default reducers;