import React, { useEffect, useState } from "react";
import urlData from "../auth.json";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "../../src/styles/DashBoard.css";
import FixedAllocation from "./FixedAllocation";

export default function ShowDataFixAllocation() {
    const columns = [
        { field: 'id', headerName: 'SNo', flex: 1 },
        { field: 'userName', headerName: 'UserName', flex: 1 },
        { field: 'status', headerName: 'Status', flex: 1 },
        { field: 'firstName', headerName: 'FirstName', flex: 1 },
        { field: 'lastName', headerName: 'LastName', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'mobileNo', headerName: 'Mobile', flex: 1 },
        { field: 'billingPlan', headerName: 'BillingPlan', flex: 1 },
        { field: 'activationDate', headerName: 'ActivationDate', flex: 1 },
        
      ];

      const rows = [
        {
          id: 1,
          sno: 1,
          symbol: '0.00',
          direction: '0.00',
          qty: '0.00',
          entry: '0.00',
          cmp: '0.00',
          pl: '0.00',
          charges: '0.00',
          netPl: '0.00',
          plPercentage: '0.00',
        },
        {
          id: 2,
          sno: 2,
          symbol: '0.00',
          direction: '0.00',
          qty: '0.00',
          entry: '0.00',
          cmp: '0.00',
          pl: '0.00',
          charges: '0.00',
          netPl: '0.00',
          plPercentage: '0.00',
        },
      ];
  return (
    <>
    <section className="dashboard">
      <div className="container">
        <div className="card col-sm-12">
          <div className="card-body col-sm-12">
            <div>
              <h4>Show Data Fix Allocation</h4>
            </div>

            <div className="mt-2">
              <div className="table-responsive">
                <div style={{ height: 500, width: "100%" }}>
                  <Box
                    sx={{
                      width: "100%",
                      "& .header": {
                        backgroundColor: "#eaecee;",
                        fontWeight: 900,
                        fontSize: "18px",
                      },
                    }}
                  >
                    <DataGrid
                      sx={{ margin: "10px", padding: "10px", fontSize: "17px" }}
                      rowHeight={30}
                      columnHeaderHeight={30}
                      rows={rows}
                      columns={columns}
                    />
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FixedAllocation/>
    </>
  );
}
