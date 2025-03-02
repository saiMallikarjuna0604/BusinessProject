import React, { useContext, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Dialog,
  Box,
} from "@mui/material";
import ListingForm from "../Marketing/Components/ListingForm";
import { AppContext } from "../../Containers/Context/AppContext";

const ListData = () => {
  const { listings, deleteListing } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);

  return (
    <div style={{ margin: "10px" }}>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Listing
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <ListingForm
          listing={selectedListing}
          setOpen={setOpen}
          setSelectedListing={setSelectedListing}
        />
      </Dialog>

      <Grid container spacing={3} mt={3}>
        {listings.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              {item.images.length > 0 && (
                <CardMedia
                  component="img"
                  height="200"
                  image={item.images[0]}
                />
              )}
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">${item.price}</Typography>

                {/* Buttons with proper spacing */}
                <Box mt={2} display="flex" gap={3}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      setSelectedListing(item);
                      setOpen(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteListing(item.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ListData;
