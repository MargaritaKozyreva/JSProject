import { SET_USER_PROFILE_DATA } from "redux/types";
import { User } from "types/types";
import { Action } from "../actions/actions";

const initialState: User = {
  id: null,
  login: null,
  password: null,
  age: null,
  fullname: null,
  position_name: null,
  gender: null,
  subdivision: null,
  company: null,
  email: null,
  phone: null,
  address: null,
  about: null,
  registered: null,
  birthday: null,
  avatar: null,
  isAdmin: null
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


export default profileReducer;
