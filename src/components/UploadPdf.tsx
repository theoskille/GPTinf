import React, { useState } from 'react';

const UploadPdf: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    console.log("uploding file");
    console.log(selectedFile);
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('/api/parsepdf', {
        method: 'POST',
        body: formData
      })
        .then(response => {
          // handle the response
        })
        .catch(error => {
          // handle the error
        });
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadPdf;