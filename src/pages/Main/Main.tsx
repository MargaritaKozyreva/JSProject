import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserProfileContainer from "../UserProfile/UserProfileContainer";
import Home from "../Auth";
import Footer from "components/Footer";
import { ITheme, User } from "types/types";
import HeaderContainer from "components/Header/container";
import { StoreState } from "redux/reducers/store";
import { changeTheme } from "redux/actions/actions";
import { connect } from "react-redux";

const mapStateToProps = (state: StoreState, ownProps: object) => {
  return { ...state.profile, ...state.theme, ...ownProps };
};
const mapDispatchToProps = (dispatch: Function) => {
  return {
    changeTheme(newTheme: ITheme) {
      dispatch(changeTheme(newTheme));
    },
  };
};

interface MainProps {
  [key: string]: any;
}

const Main: React.FC<MainProps> = (props): any => {

  return (
    <div>
      <Router>
        <HeaderContainer>
          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/profile">Профиль</Link>
              </li>
            </ul>
          </nav>
        </HeaderContainer>
        <Route path="/" exact render={() => <UserProfileContainer {...props} />} />
        <Route
          path="/profile"
          render={() => <UserProfileContainer {...props} />}
        />
      </Router>
      <Footer />
    </div>
  );
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;

