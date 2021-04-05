import React from "react";
import { User } from "types/types";

interface UserProps {
  [key: string]: any;
}

const UserProfile: React.FC<UserProps> = (props): JSX.Element => {

  return <div>
    <h3>Профиль сотрудника</h3>
    <p>email: {props.email}</p>
    <p>fullname: {props.fullname}</p>
  </div>;
};

export default UserProfile;
