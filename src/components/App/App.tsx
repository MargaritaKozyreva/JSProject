import React, {useEffect} from "react";
import MainContainer from "pages/Main/Main";
import Auth from "../../pages/Auth";
import { connect } from "react-redux";
import { StoreState } from "redux/reducers/store";
import { useAuthenticatedUser } from "redux/actions/actions";
import "./App.css";

const mapStateTpProps = (state: StoreState) => {
  const { auth } = state;
  return auth;
};

const App: React.FC<any> = (props: StoreState): any => {
  useEffect(() => {
   return useAuthenticatedUser(props)
  }, [])


  return data?.success ? <MainContainer /> : <Auth success={data?.success} />;
};

const AppContainer = connect(mapStateTpProps)(App);
export default AppContainer;
