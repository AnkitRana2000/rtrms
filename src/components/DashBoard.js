import React from "react";
import { Link } from "react-router-dom";
import "../../src/styles/DashBoard.css"

export default function DashBoard() {
  return (
    <section className="dashboard">
      <div className="container">
        <div className="card col-sm-12">
          <div className="card-body col-sm-12">
            <div className="d-flex align-items-center col-sm-12 justify-content-between">
            <div>
            <h4>Dashboard</h4>
            </div>

            <div className="mt-5">
            <Link to="/finalreport" type="button" className="btn btn-outline-secondary btn-lg me-3" >
              Show Reports
            </Link>
            <button type="button" className="btn  btn-outline-secondary btn-lg">
              Download Call File
            </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
