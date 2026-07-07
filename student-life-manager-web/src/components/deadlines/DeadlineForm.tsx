import { useState } from "react";
import toast from "react-hot-toast";

import Button from "../common/Button";
import Input from "../common/Input";

import { addDeadline } from "../../api/deadlineApi";

interface Props {
    onDeadlineAdded: () => void;
}

export default function DeadlineForm({
    onDeadlineAdded,
}: Props) {

    const [formData, setFormData] = useState({
        title: "",
        dueDate: "",
        priority: "",
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

            await addDeadline(formData);

            setFormData({
                title: "",
                dueDate: "",
                priority: "",
            });

            onDeadlineAdded();

            toast.success("Deadline added successfully!");

        } catch (err) {

            console.error(err);

            toast.error("Failed to add deadline.");

        }

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="mb-10 rounded-3xl border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur space-y-5"
        >

            <Input
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />

            <Input
                label="Due Date"
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
            />

            <Input
                label="Priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                placeholder="High / Medium / Low"
            />

            <Button type="submit">

                Add Deadline

            </Button>

        </form>

    );

}