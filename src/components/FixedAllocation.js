import React from "react";
import { Link } from "react-router-dom";
import "../../src/styles/DashBoard.css"
export default function FixedAllocation() {
  return (
    <section className="mt-3">
    <div className="container">
      <div className="card col-sm-12">
        <div className="card-body col-sm-12">
            <h4>FixedAllocation</h4>
            <div className="mt-5">
              <label>Cliant Id :</label>
              <input type="number" name="exchangeAmount" />
              <br />
              <br />
              <label>Exchange-Amount :</label>
              <input type="number" name="exchangeAmount" />
              <br />
              <br />
              <label>Preferred-Segment :</label>
              <select className="form-select" name="segment">
                <option value="NSE_FO">Equity</option>
                <option value="NSE_CM">Cash</option>
                <option value="NSE_CD">Commodity</option>
              </select>
              <br />
              <br />
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
    </section>
  );
}
