import React from "react";
import { useState } from "react";
import urlData from "../auth.json";
import "../../src/styles/DashBoard.css";

export default function UploadFixedAllocation_PreferredSegment() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }
    console.log("for", formData);

    try {
      const response = await fetch(
        `${urlData.urlData.url}/v1/uploadFileFixedPreferred`,
        {
          method: "POST",
          headers: {
            authToken: sessionStorage.token,
          },
          body: formData,
        }
      );

      // Handle the response if needed
      console.log(response);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    // <div>UploadFixedAllocation_PreferredSegment</div>
    <section className="dashboard">
      <div className="container">
        <div className="card col-sm-12">
          <div className="card-body col-sm-12">
            <h4>Preferred Segment and Fixed allocation</h4>
            <div className="mt-5">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <label>Upload Fixed-allocation</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td>
                      <input
                        type="file"
                        name="fixed_allocation"
                        accept=".csv,.txt,.xlsx,.xls"
                        required
                        onChange={handleFileChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Upload Preferred-Segment</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td>
                      <input
                        type="file"
                        name="preferred_segment"
                        accept=".csv,.txt,.xlsx,.xls"
                        required
                        onChange={handleFileChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <button
                className="btn btn-primary"
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
  );
}
