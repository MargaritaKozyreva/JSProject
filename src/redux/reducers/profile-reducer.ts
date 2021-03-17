import { User } from "../../mocks/userData";
import { Action } from "../actions/actions";

const SET_USER_PROFILE_DATA = "SET_USER_PROFILE_DATA";

const initialState: User = {
  login: "",
  password: ""
};

const profileReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_USER_PROFILE_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setUserProfileData = (payload: User): Action => {
  return {
    type: 'SET_USER_PROFILE_DATA',
    payload
  }
}

export default profileReducer;
