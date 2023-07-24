import React, { useEffect, useState } from "react";
import urlData from "../auth.json";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "../../src/styles/DashBoard.css";
import FixedAllocation from "./FixedAllocation";

export default function ShowDataFixAllocation() {
  const [FixedAllocationData, setFixedAllocationData] = useState([]);

  const fetchFixedAllocationData = async () => {
    try {
      let response = await fetch(`${urlData.urlData.url}/v1/getFixedAllocationData`, {
        method: "GET",
        headers: {
          authToken: sessionStorage.token,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch ReportsData ");
      }
      const data = await response.json();
      const FixedAllocationData = data.data.map((data, index) => ({
        ...data,
        id: index + 1,
      }));
      setFixedAllocationData(FixedAllocationData);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFixedAllocationData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'SNo', flex: 1 },
    { field: 'Client_id', headerName: 'Client_id', flex: 1 },
    { field: 'Segment', headerName: 'Segment', flex: 1 },
    { field: 'amount', headerName: 'Amount', flex: 1 },
     
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
                      rows={FixedAllocationData}
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
