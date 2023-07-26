import React from "react";
import { Link } from "react-router-dom";
import "../styles/Reports.css";

export default function Reports() {
  return (
    <>
      <section>
        <div className="container">
          <div className="card col-sm-12">
            <div className="card-body col-sm-12">
              <h4 className="mb-3">Reports</h4>

              <div className="row">
                <div className="col-sm-3 mb-3 mb-sm-0 ms-3">
                  <Link to="/finalreport" style={{ textDecoration: "none" }}>
                    <div className="card card-container">
                      <div className="card-body">
                        <h5 className="card-title">Summary</h5>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-sm-3">
                  <Link to="3" style={{ textDecoration: "none" }}>
                    <div className="card card-container">
                      <div className="card-body">
                        <h5 className="card-title">Funded Clients</h5>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-sm-3">
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="card card-container">
                      <div className="card-body">
                        <h5 className="card-title">Cross Collateral</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
