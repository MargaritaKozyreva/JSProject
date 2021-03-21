import Header from ".";
import { Response } from "../../@types/types";
import { User } from "../../mocks/userData";
import Auth from "../../pages/Auth/Auth";
import useData from "../utils/hookApi/useData/useData";

// function useAuthenticatedUser() {
//   const { data, isLoading, error } = useData<Response<User>>("login/", "");
//   return { data, isLoading, error };
// }

const HeaderContainer: any = (props: any) => {
  return <div></div>
  // const { data, isLoading, error } = useAuthenticatedUser();

  // if (isLoading) {
  //   return "Loading...";
  // }

  // if (error) {
  //   return `Error: ${error.message}`;
  // }

  // return data?.success ? <Header {...props} /> : <Auth />;
};

export default HeaderContainer;
