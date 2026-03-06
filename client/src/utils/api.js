const BASE_URL = "http://localhost:5000/api";

const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);

    if (!response.ok) {
      const err = await response.text();
      throw new Error(err || response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error(`API error (${endpoint}):`, error);
    throw error;
  }
};

export const getProducts = () => apiRequest("products");
export const getLenders = () => apiRequest("lenders");
export const getFriends = () => apiRequest("friends");

export const createProduct = (formData) =>
  apiRequest("products", {
    method: "POST",
    body: formData, 
  });
