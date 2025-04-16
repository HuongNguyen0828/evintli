"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import ClipLoader from "react-spinners/ClipLoader";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) {
      setLoading(false);
      return setError(data.error || "Something went wrong");
    }

    // You can store the token in cookies or localStorage here
    // localStorage.setItem('token', data.token);
    router.push("/home");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-teal-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl text-black font-bold mb-6 text-center">
          Login to your account
        </h1>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="input placeholder-gray-500 text-black"
        />
        <input
          name="password"
          type="password"
          placeholder="Re-enter your password"
          value={form.password}
          onChange={handleChange}
          className="input placeholder-gray-500 text-black"
        />
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <button className="bg-blue-600 text-white py-2 rounded w-full font-semibold">
          {loading && <ClipLoader color="#fff" size={15} />} Login
        </button>
        <p className="text-center text-black text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 font-medium">
            Sign-up
          </a>
        </p>
      </form>
    </div>
  );
}
