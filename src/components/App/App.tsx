import { Response } from "../../@types/types";
import "./App.css";
import useData from "../utils/hookApi/useData/useData";
import { User } from "../../mocks/userData";
import Main from "../../pages/Main/Main";
import AuthContainer from "../../pages/Auth/container/AuthContainer";
import { StoreState } from "../../redux/reducers/store";

function useAuthenticatedUser(authData: any) {
  const { data, isLoading, error } = useData<Response<User>>(
    "POST",
    "login/",
    authData
  );
  return { data, isLoading, error };
}

const App: React.FC<any> = (props: StoreState): any => {
  const { data, isLoading, error } = useAuthenticatedUser(props.auth);

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `Error: ${error.message}`;
  }

  return data?.success ? (
    <Main user={data.data} />
  ) : (
    <AuthContainer success={data?.success} />
  );
};

export default App;
