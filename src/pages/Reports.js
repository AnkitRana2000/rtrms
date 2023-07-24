import React from "react";
import { Link } from "react-router-dom";

export default function Reports() {
  return (
    <>
      <section className="dashboard">
        <div className="container">
          <div className="card col-sm-12">
            <div className="card-body col-sm-12">
              <h4 className="mb-3">Reports</h4>

              <div className="row">
                
                  <div className="col-sm-3 mb-3 mb-sm-0">
                  <Link to="/finalreport">
                    <div className="card text-bg-primary">
                      <div className="card-body">
                        <h5 className="card-title">Reports 1</h5>
                      </div>
                    </div>
                    </Link>
                  </div>
                

                <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Report 2</h5>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Report 3</h5>
                      
                    </div>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Report 4</h5>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
