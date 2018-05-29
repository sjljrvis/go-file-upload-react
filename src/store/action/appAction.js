import { browserStore } from '../../helper/collection'
import { makeRequest } from '../../helper/internet'
//export all actions here
export const loginRequest = () => ({ type: "LOGIN_REQUEST" });
export const loginSuccess = (payload) => ({ type: "LOGIN_SUCCESS", ...payload });
export const loginFail = (errMessage) => ({ type: "LOGIN_FAIL", errMessage });
export const resetLoginError = () => ({
  type: "LOGIN_ERR_RESET"
})

export const login = (email, password) => {
  return async dispatch => {
    try {
      dispatch(loginRequest());
      let { data } = await makeRequest('/login', "POST", null, { email, password });
      dispatch(loginSuccess(data));
      browserStore.set("userName", data.userName);
      browserStore.set("email", data.email);
      browserStore.set("token", data.token);
    } catch (e) {
      console.log(e)
      dispatch(loginFail(e.message));
    }
  }

}



export const repositoryRequest = () => ({ type: "REPOSITORY_REQUEST" });
export const repositorySuccess = (payload) => ({ type: "REPOSITORY_SUCCESS", ...payload });
export const repositoryFail = (errMessage) => ({ type: "REPOSITORY_FAIL", errMessage });
export const resetRepositoryError = () => ({
  type: "REPOSITORY_ERR_RESET"
})
export const setCurrentRepository = (currentRepository) => ({
  type: "SET_CURRENT_REPOSITORY",
  currentRepository:currentRepository
})
export const getRepositories = () => {
  return async dispatch => {
    try {
      dispatch(repositoryRequest());
      let { data } = await makeRequest('/repositories', "GET", null,null);
      dispatch(repositorySuccess(data));
    } catch (e) {
      dispatch(repositoryFail(e.message));
    }
  }
}