import { createContext, useState } from "react";
import { register, login } from "../api/user.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ fixed

  // 🔐 Register
  const userregister = async (data) => {
    setLoading(true);
    try {
      const res = await register(data); // ✅ pass data
      setUser(res.data.user); // ✅ correct access
      alert(res.data.message);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔐 Login
  const userlogin = async (data) => {
    setLoading(true);
    try {
      const res = await login(data); // ✅ pass data
      setUser(res.data.user); // ✅ correct access
      alert("Login successful");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, userregister, userlogin, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};