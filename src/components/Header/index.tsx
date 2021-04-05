import React from "react";
import { Response } from "../../types/types";
import { User } from "types/types";
import Auth from "pages/Auth";
import useData from "../utils/hookApi/useData/useData";

const Header: React.FC<any> = ({children}) => {

  return <div>{children}</div>;
};

export default Header;
