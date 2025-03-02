import { useState } from "react";

const useFileUpload = () => {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setError("Only JPG or PNG files allowed.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("File size should be under 2MB.");
      return;
    }

    setError(null);
    setPreview(URL.createObjectURL(file));
  };

  const resetImage = () => {
    setPreview(null);
  };

  return { preview, error, handleImageChange, resetImage };
};

export default useFileUpload;
