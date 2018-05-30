import { history } from '../../route/history'
const initialState = {
	isFetching: false,
	userName: "",
	email: "",
	token: "",
	errMessage: "",
	isLoggedIn: false,


	repositories: [],
	currentRepository: {},
	repositoryContainerInfo: {},
	logs: []
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

		//........................ Repositories...................//
		case "REPOSITORY_REQUEST":
			return Object.assign({}, state, {
				isFetching: true
			})
		case "REPOSITORY_SUCCESS":
			return Object.assign({}, state, {
				isFetching: false,
				repositories: action.repositories
			})
		case "REPOSITORY_FAIL":
			return Object.assign({}, state, {
				isFetching: false,
				errMessage: action.errMessage,
			})
		case "SET_CURRENT_REPOSITORY":
			return Object.assign({}, state, {
				currentRepository: action.currentRepository,
			})
		case "REPOSITORY_CONTAINER_INFO":
			return Object.assign({}, state, {
				repositoryContainerInfo: action.repositoryContainerInfo[0],
			})

		case "REPOSITORY_CONTAINER_LOGS":
			return Object.assign({}, state, {
				logs: action.logs,
			})

		case "CLEAR_REPOSITORY_CONTAINER_LOGS":
			return Object.assign({}, state, {
				logs: []
			})

		case "REPOSITORY_ERR_RESET":
			return Object.assign({}, state, {
				errMessage: ""
			})



		default:
			return state
	}
};

export default appReducer;
