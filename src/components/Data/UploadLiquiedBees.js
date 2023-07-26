import React from 'react'
import { useState } from "react";
import urlData from "../../auth.json";
import "../../styles/DashBoard.css";
import Loder from '../Features/Loder';

export default function UploadLiquiedBees(props) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [count, setCount] = useState(false);

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
      setCount(true)
      const response = await fetch(`${urlData.urlData.url}/v1/uploadfileliquidbees`, {
        method: 'POST',
        headers: {
          authToken: sessionStorage.token,
        },
        body: formData,
      });

      // Handle the response if needed
      console.log(response);
      setCount(false)
      const json =await response.json()
      if (json.status="success"){
        props.alert(json.message, "success");
      } else{
        props.alert(json.message, "warning");
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };




  return (
    <section>
    <div className="container mt-3">
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
              {count && <Loder/>}
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
