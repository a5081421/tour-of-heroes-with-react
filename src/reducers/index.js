/**
* @file reducer 資源管理
*/
import { combineReducers } from 'redux';
import heroAppState from './heroes';

const rootReducer = combineReducers({
  heroAppState
});

export default rootReducer;
