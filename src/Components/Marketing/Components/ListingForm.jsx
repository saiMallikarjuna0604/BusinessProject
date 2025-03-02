import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../Containers/Context/AppContext";

const ListingForm = ({ listing, setOpen, setSelectedListing }) => {
  const { addListing, updateListing } = useContext(AppContext);
  const { register, handleSubmit } = useForm({
    defaultValues: listing || { title: "", price: "", images: [] },
  });

  const onSubmit = (data) => {
    if (listing) {
      updateListing(listing?.id, data);
      setSelectedListing(null);
    } else {
      addListing({ ...data, id: Date.now(), images: [] });
    }
    setOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        padding: "20px",
        width: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        label="Title"
        {...register("title", { required: true })}
        fullWidth
        margin="dense"
      />
      <TextField
        label="Price"
        type="number"
        {...register("price", { required: true })}
        fullWidth
        margin="dense"
      />

      {/* Centering the Button */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Button type="submit" variant="contained" color="primary">
          {listing ? "Update" : "Save"}
        </Button>
      </div>
    </form>
  );
};

export default ListingForm;
