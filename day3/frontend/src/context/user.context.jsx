import { createContext, useState } from "react";
import { login } from "../api/user.api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // login fun
  const userregister = async (data) => {
    setLoading(true);
    try {
      const res = await login(data);

      const loggedInUser = res.data.user;

      setUser(loggedInUser);
      console.log(loggedInUser);
      alert(res.data.message);

      if (loggedInUser.role === "Member") {
        return navigate("/event");
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, userregister, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
