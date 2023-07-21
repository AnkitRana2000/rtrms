import React from "react";
import "../../src/styles/DashBoard.css"

export default function UploadFixedAllocation_PreferredSegment() {
  return (
    // <div>UploadFixedAllocation_PreferredSegment</div>
    <section className="dashboard">
    <div className="container">
      <div className="card col-sm-12">
        <div className="card-body col-sm-12">
            <h4>Preferred Segment and Fixed allocation</h4>
            <div className="mt-5">
              <table className="table" >
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
