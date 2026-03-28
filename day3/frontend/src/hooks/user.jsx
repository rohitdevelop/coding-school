import { useContext } from "react";
import { AuthContext } from "../context/user.context";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;

