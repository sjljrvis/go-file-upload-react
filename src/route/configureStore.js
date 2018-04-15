import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../store/reducer';
import history from './history';

const middlewareHistory = routerMiddleware(history);

export const rootReducer = combineReducers({
	...reducer,
	routing: routerReducer
});

export const middleware = applyMiddleware(
	createLogger(),
	thunk
);

export const store = createStore(
	rootReducer,
	middleware
);
