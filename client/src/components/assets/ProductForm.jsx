import { useState, useEffect } from "react";
import TextInput from "./TextInput";
import ImageUpload from "./ImageUpload";

export default function ProductForm({ onSubmit, isLoading }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    buyPrice: "",
    rentPrice: "",
    rentTerm: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (file) => {
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Cleanup object URL (important)
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!image) {
      setError("Product image is required");
      return;
    }

    if (!form.name || !form.category) {
      setError("Name and category are required");
      return;
    }

    if (+form.buyPrice <= 0 || +form.rentPrice <= 0) {
      setError("Prices must be greater than zero");
      return;
    }

    onSubmit({
      ...form,
      buyPrice: Number(form.buyPrice),
      rentPrice: Number(form.rentPrice),
      image,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4"
    >
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <TextInput
        label="Product Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <TextInput
        label="Category"
        name="category"
        value={form.category}
        onChange={handleChange}
      />

      <TextInput
        label="Buy Price"
        name="buyPrice"
        type="number"
        min="1"
        step="1"
        value={form.buyPrice}
        onChange={handleChange}
      />

      <TextInput
        label="Rent Price / month"
        name="rentPrice"
        type="number"
        min="1"
        step="1"
        value={form.rentPrice}
        onChange={handleChange}
      />

      <TextInput
        label="Rent Term"
        name="rentTerm"
        value={form.rentTerm}
        onChange={handleChange}
      />

      <ImageUpload preview={preview} onChange={handleImageChange} />

      <button
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
}

