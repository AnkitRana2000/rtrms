import React from "react";
import { Link } from "react-router-dom";
import Alerts from "../Features/Alerts";

export default function DashBoard(props) {
  return (
    <>
      <section className="dashboard ">
        <div className="container">
          <div className="card col-sm-12">
            <div className="card-body col-sm-12">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h4>Dashboard</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* <div className="d-flex align-items-center mt-4">
  <Link
    to="/finalreport"
    type="button"
    className="btn btn-outline-secondary btn-lg me-3"
  >
    Show Reports
  </Link>

  <button type="button" className="btn btn-outline-secondary btn-lg ">
    Download Call File
  </button>
</div>; */
}
