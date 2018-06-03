import { combineReducers } from 'redux';

//import all reducers here
import appReducer from './appReducer';
import uploadReducer from './uploadReducer';
import websocketReducer from './websocketReducer';
import userReducer from './userReducer'

export default combineReducers({
	appReducer,
	uploadReducer,
	websocketReducer,
	userReducer
});