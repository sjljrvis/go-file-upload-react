import { browserStore } from '../../helper/collection'
import { makeRequest } from '../../helper/internet'

/*
* USER actions
*/

export const userInfoRequest = () => ({
  type: "USER_REQUEST",
})

export const userInfoSuccess = (userInfo) => ({
  type: "USER_REQUEST_SUCCESS",
  userInfo
})

export const userInfoFail = (errMessage) => ({
  type: "USER_REQUEST_FAIL",
  errMessage
})


export const getUserInfo = (userName) => {
  return async dispatch => {
    try {
      dispatch(userInfoRequest());
      let { data: { data } } = await makeRequest(`/user/${userName}`, "GET", null, null);
      dispatch(userInfoSuccess(data))
    } catch (e) {
      console.log(e)
      dispatch(userInfoFail(e.message));
    }
  }
}

export const updateUserPassword = (payload) => {
  return async dispatch => {
    try {
      dispatch(userInfoRequest());
      let data = await makeRequest(`/admin/user`, "POST", null, payload);
      console.log(data)
    } catch (e) {
      console.log(e)
      dispatch(userInfoFail(e.message));
    }
  }
}
