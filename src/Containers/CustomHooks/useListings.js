// src/hooks/useListings.js
import { useEffect, useContext } from "react";
import { fetchListings } from "../services/api";
import { AppContext } from "../Context/AppContext";

export const useListings = () => {
  const { listings, setListings } = useContext(AppContext);

  useEffect(() => {
    const getListings = async () => {
      const data = await fetchListings();
      setListings(data);
    };
    getListings();
  }, [setListings]);

  return listings;
};
