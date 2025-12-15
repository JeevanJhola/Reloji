import { useState, useEffect } from "react";
import { getLenders } from "../utils/api";

export const useLenders = () => {
  const [lenders, setLenders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLenders = async () => {
      try {
        const data = await getLenders();
        setLenders(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLenders();
  }, []);

  return { lenders, isLoading, error };
};
