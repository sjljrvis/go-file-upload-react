
const initialState = {
	isLoggedIn: true,
	isSidebarOpen: false,
	isTopbarOpen: false,
	hasClickedSignUp: false,
	sidebarIndex: 0,
	userInfo: {},
	projects: [],
	logs: [],
	project: {},
	model: "",
	query: ""
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {

		case "TOGGLE_LOGIN":
			state.isLoggedIn = !state.isLoggedIn;
			return state;

		case "TOGGLE_SIDEBAR":
			state.isSidebarOpen = !state.isSidebarOpen;
			return state;

		case "TOGGLE_TOPBAR":
			state.isTopbarOpen = !state.isTopbarOpen;
			return state;

		case "SIDEBAR_INDEX":
			state.sidebarIndex = action.sidebarIndex;
			return state;

		case "HAS_CLICKED_SIGNUP":
			state.hasClickedSignUp = !state.hasClickedSignUp
			return state

		case "USER_INFO":
			state.userInfo = action.userInfo;
			return state;

		case "SET_PROJECTS":
			state.projects = action.projects;
			return state;

		case "SET_PROJECT":
			state.project = action.project;
			return state;

		case "SET_MODEL":
			state.model = action.model;
			return state;
		case "SET_QUERY":
			state.query = action.query;
			return state;
		case "SET_TRAINING_LOGS":
			state.logs = action.logs;
			return state;
		default:
			return state;
	}
};

export default appReducer;
