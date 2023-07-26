import React from "react";
import { Link } from "react-router-dom";
import BOD from "../components/Process/BOD";
export default function Process() {
  const linkStyles = {
    fontSize: "20px", // Adjust the value as per your preference
    textDecoration: "none",
    // Optional: Customize link color on hover
    color: "white",
  };

  return (
    <>
      <section className="dashboard">
        <div className="container">
          <div className="card col-sm-12">
            <div className="card-body col-sm-12">
              <div className="row">
                <div className="col-md-3">
                  <Link to="/uploadfile" style={linkStyles}>
                    <div
                      className="card text-bg-primary  ms-3 mt-3"
                      style={{ maxWidth: "18rem" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title text-center">BOD</h5>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-md-3">
                  <Link to="#" style={linkStyles}>
                    <div
                      className="card text-bg-secondary  ms-3 mt-3"
                      style={{ maxWidth: "18rem" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title text-center">In Market</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>


            <div className="card-body col-sm-12">
            <div className="row">
              <div className="col-md-3">
                <Link to="#" style={linkStyles}>
                  <div
                    className="card text-bg-success mb-4 ms-3"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-center">EOD</h5>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-3">
                <Link to="#" style={linkStyles}>
                  <div
                    className="card text-bg-danger mb-4 ms-3"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-center">EOD-1</h5>
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
