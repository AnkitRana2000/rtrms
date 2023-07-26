import React from 'react'
import { useState } from "react";
import urlData from "../../auth.json";
import { useNavigate } from 'react-router-dom';
import Loder from '../Features/Loder';


export default function UploadFixAllocation(props) {
const [selectedFiles, setSelectedFiles] = useState([]);
const [count, setCount] = useState(false);
 const navi = useNavigate()

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles,...event.target.files]);

  };

  const handleUpload = async () => {
   
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);

    }

    try {
      setCount(true)
      const response = await fetch(`${urlData.urlData.url}/v1/uploadFileFixedAllowcation`, {
        method: 'POST',
        headers: {
          authToken: sessionStorage.token,
        },
        body: formData,
      });

      const json =await response.json()
      console.log(json)
      setCount(false)
      if (json.status=="success"){
        props.alert(json.message, "success");
        navi("/showDataFixAllocation")
      } else{
        console.log("ele");
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
            <div >
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <label>Upload Fix Allocation</label>
                      <span style={{ color: "red" }}> *</span>
                    </td>
                    <td>
                      <input
                        type="file"
                        name="fixAllocation"
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
                className="btn btn-dark "
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
