import { connect } from "react-redux"
import { setUserData } from "../../../redux/reducers/auth-reducer"
import { AuthState, StoreState } from "../../../redux/reducers/store"
import Auth from "../Auth"

const mapStateToProps = (state: StoreState, ownProps: object) => {
  return { ...state.auth, ...ownProps }
}
const mapDispatchToProps = (dispatch: Function) => ({
  setUserData(data: AuthState) {
    dispatch(setUserData(data))
  }
})

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth)
export default AuthContainer