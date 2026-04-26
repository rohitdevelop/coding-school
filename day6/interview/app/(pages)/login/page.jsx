"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("Gagan@888");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

 const handleLogin = async () => {
  setError("");
  setLoading(true);

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        type: "password",
        email,
        password,
      }),
    });

    const data = await res.json();

    console.log("API Response:", data);

    const role =
      data?.role

    if (role === "Member") {
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/events");
    } else if (role === "Public") {
      setError("Upgrade Your Account 🚫");
    } else {
      setError("Invalid response or role not found");
    }
  } catch (err) {
    setError("Something went wrong");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
        
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}