import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { addResource } from "../../api/resourceApi";

interface Props {
  onResourceAdded: () => void;
}

export default function ResourceForm({ onResourceAdded }: Props) {

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

      alert("Resource Added!");

    } catch (err) {

      console.error(err);

      alert("Failed to add resource.");

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