import { SET_USER_DATA } from "redux/types";
import { User } from "types/types";
import { Action } from "../actions/actions";

const initialState: User = {
  login: "",
  password: "",
};

const authReducer = (state = initialState, action: Action) => {

  switch (action.type) {

    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};



export default authReducer;
