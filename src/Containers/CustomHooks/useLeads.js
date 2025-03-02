import { useEffect, useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { fetchLeads } from "../Utils/ApiData";

export const useLeads = () => {
  const { leads, setLeads } = useContext(AppContext);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    const getLeads = async () => {
      const data = await fetchLeads();
      setLeads(data);
    };
    getLeads();
  }, [setLeads]);

  useEffect(() => {
    if (filterStatus === "All") {
      setFilteredLeads(leads);
    } else {
      setFilteredLeads(leads.filter((lead) => lead.status === filterStatus));
    }
  }, [leads, filterStatus]);

  const claimLead = (id) => {
    const updatedLeads = leads.map((lead) =>
      lead.id === id ? { ...lead, status: "Claimed" } : lead
    );
    setLeads(updatedLeads); // Update the global state
  };

  return { filteredLeads, claimLead, setFilterStatus };
};
