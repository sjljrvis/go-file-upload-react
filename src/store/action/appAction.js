
//export all actions here
export const toogleLogin = () => ({ type: "TOGGLE_LOGIN" });
export const toogleSidebar = () => ({ type: "TOGGLE_SIDEBAR" });
export const toogleTopbar = () => ({ type: "TOGGLE_TOPBAR" });
export const setUserInfo = (userInfo) => ({ type: "USER_INFO", userInfo });

export const hasClickedSignUp = () =>({ type: "HAS_CLICKED_SIGNUP"})
export const setProjects = (projects) => ({ type: "SET_PROJECTS", projects });
export const setProject = (project) => ({ type: "SET_PROJECT", project });
export const setModel = (model) => ({ type: "SET_MODEL", model });
export const setQuery = (query) => ({ type: "SET_QUERY", query });
export const setTrainingLogs = (logs) => ({type : "SET_TRAINING_LOGS" , logs})


