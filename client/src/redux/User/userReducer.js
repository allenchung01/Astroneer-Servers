import { UPDATE_USER } from "./userTypes";

const INITIAL_STATE = {
  user: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default reducer;
