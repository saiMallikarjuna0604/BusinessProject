import { Typography, Grid, Card, CardContent } from "@mui/material";
import ListData from "../Common/usersList";
import LeadGeneration from "./Components/LeadGeneration";

const Home = () => {
  return (
    <div
      style={{
        width: "95vw",
        margin: "0 auto",
        padding: "0 16px",
        overflowX: "hidden",
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Welcome to Biztoso 🚀
      </Typography>

      <Grid container spacing={3}>
        {/* Featured Listings */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5">Featured Listings 🛍</Typography>
              <ListData />
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Leads */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <LeadGeneration />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
