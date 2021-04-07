import { ITheme, User, Response } from "types/types";
import { AuthState } from "redux/reducers/store"
import { CHANGE_THEME, FETCH_USER_PROFILE_DATA_FAILURE, FETCH_USER_PROFILE_DATA_SUCCESS, SET_USER_DATA, SET_USER_PROFILE_DATA } from "redux/types"
import useData from "components/utils/hookApi/useData/useData";
export interface Action {
  type: string;
  payload?: any;
}

export const changeTheme = (newTheme: ITheme) => {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}


export const setUserData = (payload: AuthState): Action => {
  return {
    type: SET_USER_DATA,
    payload
  }
}

export const setUserProfileData = (payload: any): Action => {
  return {
    type: SET_USER_PROFILE_DATA,
    payload
  }
}
export const fetchUserProfileDataSuccess = (payload: any): Action => {
  return {
    type: FETCH_USER_PROFILE_DATA_SUCCESS,
    payload
  }
}
export const fetchUserProfileDataFailure = (payload: any): Action => {
  return {
    type: FETCH_USER_PROFILE_DATA_FAILURE,
    payload
  }
}

export function useAuthenticatedUser(authData: any, dispatch: any) {
  const { data, isLoading, error } = useData<Response<User>>(
    "POST",
    "login/",
    authData
  );

  if (error) {
    dispatch(fetchUserProfileDataFailure(error))
  }

  dispatch(setUserProfileData(data))
}