import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../../src/styles/DashBoard.css";

const columns = [
  { field: "billNo", headerName: "Bill No.", flex: 1 },
  { field: "startDate", headerName: "Start Date", flex: 1 },
  { field: "endDate", headerName: "End Date", flex: 1 },
  { field: "averageCapital", headerName: "Average Capital", flex: 1 },
  { field: "netPL", headerName: "Net P/L", flex: 1 },
  { field: "prevLoss", headerName: "Prev Loss", flex: 1 },
  { field: "unaccountedPL", headerName: "UnAccounted P/L", flex: 1 },
  {
    field: "netPLAfterAdjustments",
    headerName: "Net P/L After Adjustments",
    flex: 1,
  },
  { field: "fixedCost", headerName: "Fixed Cost", flex: 1 },
  { field: "profitSharing", headerName: "Profit Sharing", flex: 1 },
  { field: "totalCost", headerName: "Total Cost", flex: 1 },
  { field: "gst", headerName: "GST", flex: 1 },
  { field: "totalCostWithGST", headerName: "Total Cost With GST", flex: 1 },
  { field: "paid", headerName: "Paid", flex: 1 },
  { field: "dueBy", headerName: "Due By", flex: 1 },
  { field: "invoiceNo", headerName: "Invoice No.", flex: 1 },
];

const rows = [
  {
    id: 1,
    billNo: "1",
    startDate: "100000000",
    endDate: "100000000",
    averageCapital: "100000000",
    netPL: "100000000",
    prevLoss: "100000000",
    unaccountedPL: "100000000",
    netPLAfterAdjustments: "100000000",
    fixedCost: "100000000",
    profitSharing: "100000000",
    totalCost: "100000000",
    gst: "100000000",
    totalCostWithGST: "100000000",
    paid: "100000000",
    dueBy: "100000000",
    invoiceNo: "100000000",
  },
  {
    id: 2,
    billNo: "TOTAL",
    startDate: "",
    endDate: "",
    averageCapital: "72,26,338",
    netPL: "3,44,454.20",
    prevLoss: "",
    unaccountedPL: "",
    netPLAfterAdjustments: "0.00",
    fixedCost: "51,263.20",
    profitSharing: "",
    totalCost: "",
    gst: "",
    totalCostWithGST: "",
    paid: "",
    dueBy: "",
    invoiceNo: "",
  },
];

export default function FinalReportTable() {
  return (
    <section className="dashboard">
      <div className="container">
        <div className="card col-sm-12">
          <div className="card-body col-sm-12">
            
              <div>
                <h4>FinalReportTable</h4>
              </div>

              <div className="mt-5">
                <div className="table-responsive">
                  <div style={{ height: 500 }}>
                    <DataGrid rows={rows} columns={columns} />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
     
    </section>
  );
}
