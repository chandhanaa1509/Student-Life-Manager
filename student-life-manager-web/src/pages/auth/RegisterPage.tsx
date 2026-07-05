import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

        alert("Registration Successful!");

        navigate("/login");

      } else {

        alert(response.message);

      }

    } catch (error) {

      alert("Something went wrong.");

      console.error(error);

    }

  };

  return (

    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-lg">

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
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
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
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
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
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-600"
            />

          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 transition"
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