import React from "react";
import { Container, Typography, Button } from "@mui/material";
import ListData from "../Common/usersList";

const MarketPlace = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Marketplace 🛒
      </Typography>

      <ListData />
    </Container>
  );
};

export default MarketPlace;
