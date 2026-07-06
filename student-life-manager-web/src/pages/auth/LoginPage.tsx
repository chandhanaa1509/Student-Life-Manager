import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { loginUser } from "../../api/authApi";

export default function LoginPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
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

            const response = await loginUser(formData);

            if (response.success) {

                localStorage.setItem("token", response.token);

                toast.success("Welcome back!");

                navigate("/dashboard");

            } else {

                toast.error(response.message);

            }

        } catch (error) {

            console.error(error);

            toast.error("Something went wrong.");

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">

            <div className="w-full max-w-md rounded-3xl border border-white/40 bg-white/80 p-10 shadow-xl backdrop-blur">

                <h1 className="text-center text-3xl font-bold text-indigo-600">

                    Welcome Back

                </h1>

                <p className="mt-2 text-center text-slate-500">

                    Sign in to continue to CampusFlow

                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >

                    <div>

                        <label className="mb-2 block font-medium">

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

                        <label className="mb-2 block font-medium">

                            Password

                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                        />

                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >

                        Login

                    </button>

                </form>

                <p className="mt-8 text-center text-slate-500">

                    Don't have an account?{" "}

                    <Link
                        to="/register"
                        className="font-semibold text-indigo-600"
                    >

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

}