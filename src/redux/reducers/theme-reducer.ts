import { Action } from "redux/actions/actions"
import { CHANGE_THEME } from "redux/types"
import { ITheme } from "types/types"

const initialState: ITheme = {
  value: 'light'
}

const themeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        ...action.payload
      }
    default: return state
  }
}

export default themeReducer