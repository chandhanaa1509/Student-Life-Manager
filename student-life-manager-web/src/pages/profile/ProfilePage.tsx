import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
    FiUser,
    FiMail,
    FiShield,
    FiSave,
} from "react-icons/fi";

import AppLayout from "../../components/layout/AppLayout";
import { getProfile, updateProfile } from "../../api/profileApi";

export default function ProfilePage() {

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        role: "",
    });

    useEffect(() => {

        loadProfile();

    }, []);

    const loadProfile = async () => {

        try {

            const data = await getProfile();

            setProfile(data);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load profile.");

        }

    };

    const saveProfile = async () => {

        try {

            await updateProfile({
                name: profile.name,
            });

            toast.success("Profile updated.");

        } catch (error) {

            console.error(error);

            toast.error("Failed to update profile.");

        }

    };

    const initials = profile.name
        ? profile.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .toUpperCase()
        : "U";

    return (

        <AppLayout>

            <div className="mx-auto max-w-3xl">

                <div className="rounded-3xl border border-white/40 bg-white/80 p-10 shadow-2xl backdrop-blur">

                    <div className="flex flex-col items-center">

                        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-5xl font-bold text-white shadow-xl">

                            {initials}

                        </div>

                        <h1 className="mt-6 text-3xl font-bold text-slate-800">

                            My Profile

                        </h1>

                        <p className="mt-2 text-slate-500">

                            Manage your CampusFlow account

                        </p>

                    </div>

                    <div className="mt-10 space-y-6">

                        <div>

                            <label className="mb-2 flex items-center gap-2 font-semibold">

                                <FiUser />

                                Name

                            </label>

                            <input
                                value={profile.name}
                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        name: e.target.value,
                                    })
                                }
                                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 font-semibold">

                                <FiMail />

                                Email

                            </label>

                            <input
                                value={profile.email}
                                readOnly
                                className="w-full rounded-2xl bg-slate-100 px-4 py-3"
                            />

                        </div>

                        <div>

                            <label className="mb-2 flex items-center gap-2 font-semibold">

                                <FiShield />

                                Role

                            </label>

                            <input
                                value={profile.role}
                                readOnly
                                className="w-full rounded-2xl bg-slate-100 px-4 py-3"
                            />

                        </div>

                        <button
                            onClick={saveProfile}
                            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 py-4 text-lg font-semibold text-white transition hover:shadow-xl"
                        >

                            <FiSave />

                            Save Changes

                        </button>

                    </div>

                </div>

            </div>

        </AppLayout>

    );

}