import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
/*import nextReducer from './nextReducer';*/

export default combineReducers ({
	jobs: mainReducer,
});
