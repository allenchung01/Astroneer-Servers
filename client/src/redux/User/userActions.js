import { UPDATE_USER } from "./userTypes";

export const updateUser = (payload) => {
  return {
    type: UPDATE_USER,
    payload,
  };
};
