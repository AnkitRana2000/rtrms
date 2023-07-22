import React from 'react'
import { useState } from "react";
import urlData from "../auth.json";

import "../../src/styles/DashBoard.css"

export default function UploadLiquiedBees() {
  const [selectedFiles, setSelectedFiles] = useState([]);
 

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles,...event.target.files]);

  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);

    }
    console.log("for",formData)

    try {
      const response = await fetch(`${urlData.urlData.url}/v1/uploadfileliquidbees`, {
        method: 'POST',
        headers: {
          authToken: sessionStorage.token,
        },
        body: formData,
      });

      // Handle the response if needed
      console.log(response);
      const json =await response.json()
      console.log(json)
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };




  return (
    <section className="mt-3">
    <div className="container">
      <div className="card col-sm-12">
        <div className="card-body col-sm-12">
            <h4>Preferred Client</h4>
            <div className="mt-5">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <label>Upload Liquied Bees</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td>
                      <input
                        type="file"
                        name="liquiedbees"
                        accept=".csv"
                        required
                        onChange={handleFileChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <button
                id="submit-button"
                className="btn btn-dark my-4"
                type="submit"
                value="Upload-Files"
                onClick={handleUpload}
              >
                Submit
              </button>
            </div>
            </div>
          </div>
        </div>
      
    </section>
  )
}
