import React from "react";
import { useParams } from "react-router";
import { Response } from "../../@types/types";
import useData from "../../components/utils/hookApi/useData/useData";
import { User } from "../../mocks/userData";
import UserProfile from "./UserProfile";

function useProfileUser(id: string = "1") {
  const { data, isLoading, error } = useData<Response<User>>(`profile/${id}`);

  return { data, isLoading, error };
}

const UserProfileContainer: React.FC = (): JSX.Element => {
  let { id } = useParams<any>();

  const { data, isLoading, error } = useProfileUser(id);

  console.log(data)

  if (isLoading) {
    return <div>"Loading..."</div>;
  }

  if (error) {
    return <div>`Error: ${error.message}`</div>;
  }

  return data?.success ? (
    <UserProfile user={data.data} />
  ) : (
    <div>User Not Defined</div>
  );
};

export default UserProfileContainer;
