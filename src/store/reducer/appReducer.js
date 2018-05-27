
const initialState = {
	isFetching: false,
	userName: "",
	email: "",
	token: "",
	errMessage:""
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
				token: action.token
			})

		case "LOGIN_FAIL":
			return Object.assign({}, state, {
				isFetching: false,
				errMessage : action.errMessage
			})

		default:
			return state
	}
};

export default appReducer;
