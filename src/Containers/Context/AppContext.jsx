/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { fetchLeads, fetchListings } from "../Utils/ApiData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [leads, setLeads] = useState([]);

  // Add Listing
  const addListing = (newListing) => {
    setListings((prev) => [...prev, { id: Date.now(), ...newListing }]);
  };

  // Edit Listing
  const editListing = (id, updatedListing) => {
    setListings((prev) =>
      prev?.map((listing) => (listing?.id === id ? updatedListing : listing))
    );
  };

  // Delete Listing
  const deleteListing = (id) => {
    setListings((prev) => prev?.filter((listing) => listing.id !== id));
  };

  // Update Listing
  const updateListing = (id, updatedListing) => {
    setListings((prev) =>
      prev?.map((listing) =>
        listing?.id === id ? { ...listing, ...updatedListing } : listing
      )
    );
  };

  // Fetch Leads
  const fetchLeadsData = async () => {
    try {
      const leadsData = await fetchLeads();
      setLeads(leadsData);
    } catch (error) {
      console.error("err------lead-------", error);
    }
  };

  // Fetch Listings
  const fetchListingsData = async () => {
    try {
      const listingsData = await fetchListings();
      setListings(listingsData);
    } catch (error) {
      console.error("err------listing---------", error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      await fetchLeadsData();
      await fetchListingsData();
    };

    fetchAllData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        listings,
        setListings,
        leads,
        setLeads,
        addListing,
        editListing,
        deleteListing,
        updateListing,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
