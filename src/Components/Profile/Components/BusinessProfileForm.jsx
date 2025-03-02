import React, { useState, useRef } from "react"; // Import useRef
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import useFileUpload from "../../../Containers/CustomHooks/useImageUpload";

const BusinessProfile = ({ setOpen }) => {
  const { preview, error, handleImageChange, resetImage } = useFileUpload();
  const fileInputRef = useRef(null);

  const [profile, setProfile] = useState({
    name: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile saved successfully! ✅");

    setProfile({ name: "", location: "", description: "" });

    resetImage();

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    if (setOpen) setOpen(false);
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Business Profile
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Business Name"
          name="name"
          value={profile.name}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Location"
          name="location"
          value={profile.location}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={profile.description}
          onChange={handleChange}
          required
          margin="normal"
          multiline
          rows={3}
        />

        {/* Image Upload */}
        <Box
          sx={{ mt: 2, p: 2, border: "1px dashed #ccc", textAlign: "center" }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
          />{" "}
          {/* Attach ref here */}
          {preview && (
            <img
              src={preview}
              alt="Preview"
              width="120"
              style={{ marginTop: "10px", borderRadius: "8px" }}
            />
          )}
          {error && <Typography color="error">{error}</Typography>}
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          fullWidth
          sx={{ mt: 3, mb: 2, maxWidth: "150px" }}
        >
          Save Profile
        </Button>
      </Box>
    </Container>
  );
};

export default BusinessProfile;
