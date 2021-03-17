import { Response } from "../../@types/types";
import "./App.css";
import Auth from "../../pages/Auth/Auth";
import useData from "../utils/hookApi/useData/useData";
import { User } from "../../mocks/userData";
import Main from "../../pages/Main/Main";

function useAuthenticatedUser() {
  const { data, isLoading, error } = useData<Response<User>>("auth/me");
  return { data, isLoading, error };
}

const App: React.FC = (): any => {
  const { data, isLoading, error } = useAuthenticatedUser();
  console.log(data)

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `Error: ${error.message}`;
  }

  return data?.success ? <Main user={data.data} /> : <Auth />;
};

export default App;
