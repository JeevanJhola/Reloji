import { useState } from "react";
import { createProduct } from "../utils/api";

export const useCreateProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addProduct = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      return await createProduct(formData);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { addProduct, isLoading, error };
};

