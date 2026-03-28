"use client";

import React, { useState } from "react";
import useAuth from "../../hooks/user";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { userlogin } = useAuth(); // ✅ hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    await userlogin({
      email: form.email,
      password: form.password,
    });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-md border border-neutral-800 rounded-2xl">

        <h1 className="text-2xl font-semibold text-white text-center mb-6">
          Login <span className="text-[#00ff00]">Account</span>
        </h1>

        {/* ✅ Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full bg-black border border-neutral-800 px-4 py-3 text-white rounded-md outline-none focus:border-[#00ff00] placeholder-neutral-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full bg-black border border-neutral-800 px-4 py-3 text-white rounded-md outline-none focus:border-[#00ff00] placeholder-neutral-500"
          />

          <button
            type="submit"
            className="w-full py-3 border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black transition rounded-md font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-neutral-400 text-sm text-center mt-5">
          Don’t have an account?{" "}
          <span className="text-[#00ff00] cursor-pointer">Register</span>
        </p>

      </div>
    </div>
  );
};

export default Login;