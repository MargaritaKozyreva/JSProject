import React from "react";
import { User } from "../../mocks/userData";

interface UserProps {
  [key: string]: any;
  user: User;
}

const UserProfile: React.FC<UserProps> = ({ user }): JSX.Element => {

  return <div>
    <h3>Профиль сотрудника</h3>
    <p>email: {user.email}</p>
    <p>fullname: {user.fullname}</p>
  </div>;
};

export default UserProfile;
