import React from "react";
import { useState } from "react";
import urlData from "../auth.json";
import { useNavigate } from "react-router-dom";
import "../../src/styles/DashBoard.css"

export default function UploadFile() {
  const [message, setMessage] = useState("");
  // const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState({});
 

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);

  };

  // const handleUpload = async () => {
  //   const formData = new FormData();
  //   for (let i = 0; i < selectedFiles.length; i++) {
  //     formData.append('files', selectedFiles[i]);

  //   }
  //   console.log("for",formData)

  //   try {
  //     const response = await fetch(`${urlData.urlData.url}/uploadfilesDemo/`, {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     // Handle the response if needed
  //     console.log(response);
  //     const json =await response.json()
  //     console.log(json)
  //   } catch (error) {
  //     console.error('Error uploading files:', error);
  //   }
  // };

  // const handleFileChange = (event) => {
  //   const { name, files } = event.target;
  //   setSelectedFiles((prevState) => ({ ...prevState, [name]: files }));
  // };
  const handleUpload = async () => {
    const formData = new FormData();
    for (const key in selectedFiles) {
      const files = selectedFiles[key];
      for (let i = 0; i < files.length; i++) {
        formData.append(key, files[i]);
      }
    }

    try {
      const response = await fetch(`${urlData.urlData.url}/uploadfilesDemo/`, {
        method: 'POST',
        body: formData,
      });

      // Handle the response if needed
      console.log(response);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <section className="dashboard">
    <div className="container">
      <div className="card col-sm-12">
        <div className="card-body col-sm-12">
            <h4>UploadFile</h4>
            <div className="message">
              <p>{message}</p>
            </div>


            <div className="mt-5">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <label>Upload RTRMS_FO</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td>
                      <input
                        type="file"
                        
                        name="rtrms_fo"
                        accept=".csv,.txt,.xlsx,.xls"
                        required
                        onChange={handleFileChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Upload RTRMS_CM</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td>
                      <input
                        type="file"
                        
                        name="rtrms_cm"
                        accept=".csv,.txt,.xlsx,.xls"
                        required
                        onChange={handleFileChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Upload RTRMS_CD</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td>
                      <input
                        type="file"
                        
                        name="rtrms_cd"
                        accept=".csv,.txt,.xlsx,.xls"
                        required
                        onChange={handleFileChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Upload Trail Balance</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td>
                      <input
                        type="file"
                        
                        name="trial_balance"
                        accept=".csv,.txt,.xlsx,.xls"
                        required
                        onChange={handleFileChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                id="submit-button"
                className="btn btn-dark my-4"
                type="button" // Change the type to "button" to prevent form submission
                onClick={handleUpload}
              >
                Submit
              </button>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




// import React, { useState } from 'react';

// const FileUploadForm = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleFileChange = (event) => {
//     setSelectedFiles(event.target.files);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     for (let i = 0; i < selectedFiles.length; i++) {
//       formData.append('files', selectedFiles[i]);
//     }

//     try {
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       // Handle the response if needed
//       console.log(response);
//     } catch (error) {
//       console.error('Error uploading files:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" multiple onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload Files</button>
//     </div>
//   );
// };

// export default FileUploadForm;