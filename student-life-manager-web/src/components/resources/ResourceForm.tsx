import { useState } from "react";
import toast from "react-hot-toast";

import Button from "../common/Button";
import Input from "../common/Input";

import { addResource } from "../../api/resourceApi";

interface Props {
  onResourceAdded: () => void;
}

export default function ResourceForm({
  onResourceAdded,
}: Props) {

  const [formData, setFormData] = useState({
    title: "",
    link: "",
    category: "",
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

      await addResource(formData);

      setFormData({
        title: "",
        link: "",
        category: "",
      });

      onResourceAdded();

      toast.success("Resource added successfully!");

    } catch (err) {

      console.error(err);

      toast.error("Failed to add resource.");

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
        label="Link"
        name="link"
        value={formData.link}
        onChange={handleChange}
      />

      <Input
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />

      <Button type="submit">

        Add Resource

      </Button>

    </form>

  );

}