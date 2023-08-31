import { useState } from "react";

const useHttp = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  const baseUrl = "https://rickandmortyapi.com/api/";

  const sendRequest = async (url, base = true, transform = false) => {
    setLoading(true);
    setError(false);
    try {
      if (base) {
        const res = await fetch(baseUrl + url);
        const data = await res.json();

        console.log("inside use http", data);

        if (transform) {
          setData(data.results);
        } else {
          setData(data);
        }

        // setData(data.results);
      } else {
        const res = await fetch(url);
        const data = await res.json();

        setData(data);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return {
    error,
    loading,
    data,
    sendRequest,
  };
};

export default useHttp;
