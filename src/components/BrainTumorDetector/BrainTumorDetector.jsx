import React, { useState, useRef } from "react";
import Header from "./Header";
import "./BrainTumorDetector.css";

const BrainTumorDetector = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null); // Reference to file input

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  // Function to trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <main className="container">
      <Header userName="xyz" />
      <h1 className="title">Brain Tumor Detector 🧠</h1>
      <section 
        className="uploadSection" 
        onDrop={handleDrop} 
        onDragOver={handleDragOver}
        onClick={triggerFileInput} // Trigger file input when section is clicked
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef} // Reference to the input
          className="fileInput"
        />
        {selectedImage ? (
          <img src={selectedImage} alt="Uploaded preview" className="previewImage" />
        ) : (
          <>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/caf0be4b24be5b8027a77ba2d6b4e954c37a603b5a018a1091d52cdaf1543feb?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f"
              alt="Upload icon"
              className="uploadIcon"
            />
            <p className="uploadText">Drag & Drop Image(s) here or Browse Image</p>
          </>
        )}
      </section>
    </main>
  );
};

export default BrainTumorDetector;
