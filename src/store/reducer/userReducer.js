const initialState = {
  userInfo: null,
  isFetching: false,
  errMessage : ""
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case "USER_REQUEST":
      return Object.assign({}, state, {
        isFetching: true
      })

    case "USER_REQUEST_SUCCESS":
      return Object.assign({}, state, {
        isFetching: false,
        userInfo:action.userInfo
      })

    case "USER_REQUEST_FAIL":
      return Object.assign({}, state, {
        isFetching: false,
        errMessage : action.errMessage
      })


    default:
      return state
  }
}

export default userReducer