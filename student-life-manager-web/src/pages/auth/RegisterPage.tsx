import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registerUser } from "../../api/authApi";

export default function RegisterPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      const response = await registerUser(formData);

      if (response.success) {

        toast.success("Account created successfully!");

        navigate("/login");

      } else {

        toast.error(response.message);

      }

    } catch (error) {

      console.error(error);

      toast.error("Something went wrong.");

    }

  };

  return (

    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur p-10 shadow-xl">

        <h1 className="text-3xl font-bold text-center text-indigo-600">

          Create Account

        </h1>

        <p className="mt-2 text-center text-slate-500">

          Join CampusFlow and start organizing your student life.

        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">

              Full Name

            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">

              Email

            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">

              Password

            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            Create Account

          </button>

        </form>

        <p className="mt-8 text-center text-slate-500">

          Already have an account?{" "}

          <Link
            to="/login"
            className="font-semibold text-indigo-600"
          >

            Login

          </Link>

        </p>

      </div>

    </div>

  );

}