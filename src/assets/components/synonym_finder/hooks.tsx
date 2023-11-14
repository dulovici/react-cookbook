/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const base_url = "https://api.datamuse.com";

export const useSynonymsAPI = (word: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${base_url}/words?rel_syn=${word}`);
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [word]);

  return { data, loading, error };
};
