import React from "react";
import { useParams } from "react-router";
import { Response } from "../../@types/types";
import useData from "../../components/utils/hookApi/useData/useData";
import { User } from "../../mocks/userData";
import UserProfile from "./UserProfile";

interface UserProfileContainerProps {
  [key: string]: any;
  user: User;
}

const UserProfileContainer: React.FC<UserProfileContainerProps> = ({user}): JSX.Element => {
  return <UserProfile user={user} />;
};

export default UserProfileContainer;
