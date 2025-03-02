import React, { useContext } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { AppContext } from "../../../Containers/Context/AppContext";

const Leads = () => {
  const { leads } = useContext(AppContext);

  return (
    <Grid container spacing={3} mt={1}>
      {leads.length === 0 ? (
        <Typography>No leads assigned yet.</Typography>
      ) : (
        leads.map((lead) => (
          <Grid item xs={12} sm={6} md={4} key={lead.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{lead.name}</Typography>
                <Typography variant="body2">Status: {lead.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Leads;
