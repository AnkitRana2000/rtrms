import React from "react";
import { Link } from "react-router-dom";
import "../styles/LiveMonitor.css";

export default function LiveMonitor() {
  return (
    <section>
      <div className="container">
        <div className="card col-sm-12">
          <div className="card-body col-sm-12">
            <h4 className="mb-3">LiveMonitor</h4>

            <div className="row">
              <div className="col-sm-3 mb-3 mb-sm-0 ms-3 ">
                <Link to="/overAllUtilisation" style={{ textDecoration: "none" }}>
                  <div className="card card-container mb-3">
                    <div className="card-body">
                      <h5 className="card-title">OverAllUtilisation</h5>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-sm-3 mb-3 mb-sm-0 ms-3">
                <Link to="#" style={{ textDecoration: "none" }}>
                  <div className="card card-container">
                    <div className="card-body">
                      <h5 className="card-title">SegmentWiseUtilisation</h5>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-sm-3 mb-3 mb-sm-0 ms-3">
                <Link to="#" style={{ textDecoration: "none" }}>
                  <div className="card card-container">
                    <div className="card-body">
                      <h5 className="card-title">OverAllShortMargin</h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
