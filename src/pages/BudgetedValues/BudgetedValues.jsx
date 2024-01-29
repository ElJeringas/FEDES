import React, { useState } from 'react';
import axios from 'axios';

const BudgetedValues = () => {
  const [file, setFile] = useState(null);
  const [preSignedUrl, setPreSignedUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    console.log("Dropped file:", droppedFile.name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(process.env.REACT_APP_WS_URL + process.env.REACT_APP_WS_GET_PRESIGNED_URL, {
        params: {
          bucketName: "fedes-budget-execution",
          objectName: "budgeted-values/" + file.name,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Presigned URL:", response.data.presigned_url);
          setPreSignedUrl(response.data.presigned_url);
          uploadFile(response.data.presigned_url, file);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const uploadFile = (preSignedUrl, file) => {
    console.log("Uploading file...");

    axios
      .put(preSignedUrl, file)
      .then((response) => {
        if (response.status === 200) {
          console.log("File uploaded successfully");
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log("Error uploading file:", error);
      });
  };

  const FileUpload = (event) => {
    setFile(event.target.files[0]);
    console.log("File selected:", event.target.files[0].name);
  };

  return (
    <section>
      <div>
        <div
          className={`shadow-md rounded-md p-6 bg-white ${
            isDragging ? 'border-dashed border-2 border-blue-500' : ''
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h1 className='pb-4 text-2xl font-bold'>Valores Presupuestados</h1>
          <form onSubmit={handleSubmit}>
            <h2 className='text-xl my-6'>Carga de Archivos</h2>
            <div
              className={`w-full border-dashed border-2 border-gray-300 p-4 rounded-md text-center ${
                isDragging ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
            >
              <label htmlFor='fileInput'>
                {file ? `Archivo Selecionado: ${file.name}` : 'Arrastre o click para cargar archivo'}
              </label>
              <input
                type='file'
                accept='.xlsx'
                onChange={FileUpload}
                className='hidden'
                id='fileInput'
              />
            </div>
            <button
              disabled={!file}
              className={`flex mt-10 content-center items-center text-black-500 py-2 px-2 text-md rounded-xl ${
                file ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-gray-300 cursor-not-allowed'
              }`}
              type='submit'
            >
              Cargar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BudgetedValues;
