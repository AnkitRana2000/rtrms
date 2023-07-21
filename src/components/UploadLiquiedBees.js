import React from 'react'
import "../../src/styles/DashBoard.css"

export default function UploadLiquiedBees() {
  return (
    
    <section className="dashboard">
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
