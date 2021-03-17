import { User } from "../../mocks/userData";
import { Action } from "../actions/actions";

const SET_USER_DATA = "SET_USER_DATA";

const initialState: User = {
  login: "",
  password: "",
};

const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setUserData = (payload: User): Action => {
  return {
    type: 'SET_USER_DATA',
    payload
  }
}

export default authReducer;
