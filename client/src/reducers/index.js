import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import nextReducer from './nextReducer';

export default combineReducers ({
	jobs: searchReducer,
	next: nextReducer
});
