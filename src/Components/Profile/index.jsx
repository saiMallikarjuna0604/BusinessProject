// src/pages/Profile.js
import { Container, Typography, Box } from "@mui/material";
import BusinessProfile from "./Components/BusinessProfileForm";
import Leads from "./Components/Leads";

const Profile = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Business Profile 🏢
      </Typography>
      <BusinessProfile />

      <Box display="flex" flexDirection="column">
        <Typography variant="h5" gutterBottom>
          Your Leads 📈
        </Typography>
        <Leads />
      </Box>
    </Container>
  );
};

export default Profile;
