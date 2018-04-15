
const initialState = {
  data: {}
};

const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UPLOAD_FILE_DATA":
      state.data = action.data;
      return state;
    default:
      return state;
  }
};

export default uploadReducer;
