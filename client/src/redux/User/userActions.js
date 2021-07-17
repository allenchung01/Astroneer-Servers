import { UPDATE_USER } from "./userTypes";
import { UPDATE_TAB } from "./userTypes";

export const updateUser = (payload) => {
  return {
    type: UPDATE_USER,
    payload,
  };
};

export const updateTab = (payload) => {
  return {
    type: UPDATE_TAB,
    payload,
  };
};
