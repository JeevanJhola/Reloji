import ProductForm from "./ProductForm";
import { useCreateProduct } from "../../hooks/useCreateProduct";

export default function AddItem() {
  const { addProduct, isLoading, error } = useCreateProduct();

  const handleSubmit = async (data) => {
    try {
      await addProduct(data);
      alert("Product added successfully");
    } catch {
      alert("Failed to add product");
    }
  };

  return (
    <>
      {error && <p className="text-red-500">{error.message}</p>}
      <ProductForm onSubmit={handleSubmit} isLoading={isLoading} />
    </>
  );
}

