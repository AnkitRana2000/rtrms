import React from "react";
import { Link } from "react-router-dom";

export default function Data() {
  return (
    <section className="dashboard">
      <div className="container">
        <div className="card col-sm-12">
          <div className="card-body col-sm-12">
            <div>
              <h4>Data</h4>
            </div>

            <div className="mt-3">
              <table className="table">
                <tbody>
                  <tr className="table-info">
                    <td>
                      <label>Fixed-Allocation:</label>
                    </td>
                    <td>
                      <Link
                        to="/showDataFixAllocation"
                        className="btn btn-info"
                      >
                        Fixed-Allocation
                      </Link>
                    </td>
                  </tr>

                  <tr className="table-danger">
                    <td>
                      <label>Show Data Liquid Bees:</label>
                    </td>
                    <td>
                      <Link to="/showDataLiquidBees" className="btn btn-danger">
                        Show Data Liquid Bees
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <tr className="table-secondary">
<td>
  <label>
    Upload Fixed-Allocation & Preferred-Segment:
  </label>
</td>
<td>
  <Link
    to="/uploadFixAndPref"
    className="btn btn-secondary"
  >
    Upload Fixed-Allocation & Preferred-Segment
  </Link>
</td>
</tr> */
}
