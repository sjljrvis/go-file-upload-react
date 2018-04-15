import { combineReducers } from 'redux';

//import all reducers here
import appReducer from './appReducer';
import uploadReducer from './uploadReducer'
export default combineReducers({
	appReducer,uploadReducer
});