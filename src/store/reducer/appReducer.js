import { history } from '../../route/history'
const initialState = {
	isFetching: false,
	userName: "",
	email: "",
	token: "",
	errMessage: "",
	isLoggedIn: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN_REQUEST":
			return Object.assign({}, state, {
				isFetching: true
			})

		case "LOGIN_SUCCESS":
			return Object.assign({}, state, {
				isFetching: false,
				userName: action.userName,
				email: action.email,
				token: action.token,
				isLoggedIn: true
			})

		case "LOGIN_FAIL":
			return Object.assign({}, state, {
				isFetching: false,
				errMessage: action.errMessage,
				isLoggedIn: false
			})
		case "LOGIN_ERR_RESET":
			return Object.assign({}, state, {
				errMessage: ""
			})

		default:
			return state
	}
};

export default appReducer;
