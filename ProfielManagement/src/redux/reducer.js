import { ADD_USER, UPDATE_USER, SET_USERS } from "./actions";

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UPDATE_USER:
      const updatedUsers = [...state.users];
      updatedUsers[action.payload.index] = action.payload.user;
      return { ...state, users: updatedUsers };
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default reducer;