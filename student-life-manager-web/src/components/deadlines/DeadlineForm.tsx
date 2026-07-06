import { useState } from "react";
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

            alert("Deadline Added!");

        } catch (err) {

            console.error(err);

            alert("Failed to add deadline.");

        }

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="mb-8 rounded-2xl bg-white p-8 shadow-sm space-y-5"
        >

            <Input
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />

            <Input
                label="Due Date"
                name="dueDate"
                type="date"
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