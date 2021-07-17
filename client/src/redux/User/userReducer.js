import { UPDATE_USER } from "./userTypes";
import { UPDATE_TAB } from "./userTypes";

const INITIAL_STATE = {
  user: null,
  tab: "Home",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case UPDATE_TAB:
      console.log(action.payload.tab);
      return {
        ...state,
        tab: action.payload.tab,
      };
    default:
      return state;
  }
};

export default reducer;
