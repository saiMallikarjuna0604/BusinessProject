import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Container,
  Box,
} from "@mui/material";
import { useLeads } from "../../../Containers/CustomHooks/useLeads";
import NoDataImage from "../../../assets/no-data.png"; // Ensure correct path

const LeadGeneration = ({ fixedHeader = false }) => {
  const { filteredLeads, claimLead, setFilterStatus } = useLeads();

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  return (
    <>
      {/* Conditional Header Styling */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          ...(fixedHeader && {
            position: "fixed",
            top: 64, // ✅ Below Navbar (adjust height accordingly)
            left: 0,
            width: "100%",
            backgroundColor: "white",
            zIndex: 1100,
            padding: "12px 16px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          }),
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Typography variant="h5">Your Recent Leads 🔍</Typography>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Status Filter</InputLabel>
            <Select onChange={handleFilterChange} defaultValue="All">
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="New">New</MenuItem>
              <MenuItem value="Contacted">Contacted</MenuItem>
              <MenuItem value="Follow-up">Follow-up</MenuItem>
              <MenuItem value="Negotiation">Negotiation</MenuItem>
              <MenuItem value="Claimed">Claimed</MenuItem>
            </Select>
          </FormControl>
        </Container>
      </Box>

      {/* Main Content (Only Adds Margin if Fixed Header is Used) */}
      <Container
        maxWidth="lg"
        sx={{ marginTop: fixedHeader ? "110px" : "0px", marginBottom: "20px" }}
      >
        {/* No Data State */}
        {filteredLeads.length === 0 ? (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <img src={NoDataImage} alt="No Data" width="200" />
            <Typography variant="h6" color="textSecondary" mt={2}>
              No leads available 📭
            </Typography>
          </Box>
        ) : (
          <Grid
            container
            spacing={3}
            sx={fixedHeader ? { justifyContent: "center" } : {}}
          >
            {filteredLeads.map((lead) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                key={lead.id}
                sx={fixedHeader ? { minWidth: 300 } : {}}
              >
                <Card
                  sx={{
                    width: "100%",
                    minHeight: 180,
                    ...(fixedHeader && { flexGrow: 1 }),
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">{lead.name}</Typography>
                    <Typography variant="body2">
                      Status: {lead.status}
                    </Typography>
                    {lead.status !== "Claimed" && (
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2, maxWidth: "150px" }}
                        onClick={() => claimLead(lead.id)}
                      >
                        Claim Lead
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default LeadGeneration;
