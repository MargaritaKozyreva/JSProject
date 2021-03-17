import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserProfileContainer from "../UserProfile/UserProfileContainer";
import Home from "../Home";
import Footer from "../Footer";
import { User } from "../../mocks/userData";
import HeaderContainer from "../../components/Header/container";

interface MainProps {
  [key: string]: any;
  user: User;
}

const Main: React.FC<MainProps> = ({user}): any => {
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
        <Route path="/" exact render={() => <Home />} />
        <Route path="/profile/:id?" render={() => <UserProfileContainer />} />
      </Router>
      <Footer />
    </div>
  );
};

export default Main;
