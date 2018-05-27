import { browserStore } from '../../helper/collection'
import { makeRequest } from '../../helper/internet'
//export all actions here
export const loginRequest = () => ({ type: "LOGIN_REQUEST" });
export const loginSuccess = (payload) => ({ type: "LOGIN_SUCCESS", ...payload });
export const loginFail = (errMessage) => ({ type: "LOGIN_FAIL" ,errMessage});

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
