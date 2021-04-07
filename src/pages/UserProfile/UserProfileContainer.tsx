import React from "react";
import { useParams } from "react-router";
import { Response } from "../../types/types";
import useData from "../../components/utils/hookApi/useData/useData";
import { User } from "types/types";
import UserProfile from "./UserProfile";

interface UserProfileContainerProps {
  [key: string]: any;
}

const UserProfileContainer: React.FC<UserProfileContainerProps> = (props): JSX.Element => {
  return <UserProfile {...props} />;
};

export default UserProfileContainer;
