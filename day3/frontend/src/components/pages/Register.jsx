"use client";

import React, { useState } from "react";
import useAuth from "../../hooks/user"; // ✅ fixed name
import { useNavigate } from "react-router-dom"; 
const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { userregister } = useAuth(); // ✅ correct hook usage
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ fixed

    await userregister({
      name: form.name,
      email: form.email,
      password: form.password,
    });
    navigate("/login")
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-md border border-neutral-800 rounded-2xl">

        <h1 className="text-2xl font-semibold text-white text-center mb-6">
          Create <span className="text-[#00ff00]">Account</span>
        </h1>

        {/* ✅ Form connected */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full bg-black border border-neutral-800 px-4 py-3 text-white rounded-md outline-none focus:border-[#00ff00] placeholder-neutral-500"
          />

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
            Register
          </button>

        </form>

        <p className="text-neutral-400 text-sm text-center mt-5">
          Already have an account?{" "}
          <span className="text-[#00ff00] cursor-pointer">Login</span>
        </p>

      </div>
    </div>
  );
};

export default Register;