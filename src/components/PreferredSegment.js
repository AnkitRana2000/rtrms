import React from "react";
import "../../src/styles/DashBoard.css"

export default function PreferredSegment() {
  return (
    <section className="dashboard">
    <div className="container">
      <div className="card col-sm-12">
        <div className="card-body col-sm-12">
            <h4>Preferred Client</h4>
            <div className="mt-5">
              <div>
                <label>Cliant Id :</label>
                <input type="number" name="exchangeAmount" />
              </div>
              <div className="mt-3">
                <label>Preferred-Segment :</label>
                <select className="form-select" name="segment">
                  <option value="NSE_FO">Equity</option>
                  <option value="NSE_CM">Cash</option>
                  <option value="NSE_CD">Commodity</option>
                </select>
              </div>
              <div className="mt-5">
                <input
                  type="submit"
                  className="btn btn-primary"
                  name="submit"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
