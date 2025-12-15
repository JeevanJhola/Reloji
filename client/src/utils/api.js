const BASE_URL = "http://localhost:5000/api";

const apiRequest = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch from ${endpoint}:`, error);
    throw error;
  }
};

export const getProducts = () => apiRequest("products");
export const getLenders = () => apiRequest("lenders");
export const getFriends = () => apiRequest("friends");
