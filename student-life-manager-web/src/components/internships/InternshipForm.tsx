import { useState } from "react";
import toast from "react-hot-toast";

import Button from "../common/Button";
import Input from "../common/Input";

import { addInternship } from "../../api/internshipApi";

interface Props {
    onInternshipAdded: () => void;
}

export default function InternshipForm({
    onInternshipAdded,
}: Props) {

    const [formData, setFormData] = useState({
        company: "",
        role: "",
        status: "",
        applicationDeadline: "",
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

            await addInternship(formData);

            setFormData({
                company: "",
                role: "",
                status: "",
                applicationDeadline: "",
            });

            onInternshipAdded();

            toast.success("Internship added successfully!");

        } catch (err) {

            console.error(err);

            toast.error("Failed to add internship.");

        }

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="mb-10 rounded-3xl border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur space-y-5"
        >

            <Input
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
            />

            <Input
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
            />

            <Input
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                placeholder="Applied / Interview / Selected"
            />

            <Input
                label="Application Deadline"
                type="date"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
            />

            <Button type="submit">

                Add Internship

            </Button>

        </form>

    );

}