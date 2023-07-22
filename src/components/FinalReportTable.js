import React, { useEffect, useState } from "react";
import urlData from "../auth.json";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "../../src/styles/DashBoard.css";

export default function FinalReportTable() {
  const [ReportsData, setReportsData] = useState([]);


  //Final Report Data API
  const fetchFinalReportData = async () => {
    try {
      let response = await fetch(`${urlData.urlData.url}/v1/getData`, {
        method: "GET",
        headers: {
          authToken: sessionStorage.token,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch ReportsData ");
      }
      const data = await response.json();
      const ReportsData = data.data.map((data, index) => ({
        ...data,
        id: index + 1,
      }));
      setReportsData(ReportsData);
      // console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  console.log("ReportsData", ReportsData);
  useEffect(() => {
    fetchFinalReportData();
  }, []);

   //Report CSV Generate API
  
   const handleDownloadCsv = async () => {
    try {
      // Replace 'YOUR_API_URL' with the actual URL to download the CSV from
      const urlData = "YOUR_API_URL";
      
      const response = await fetch(`${urlData}/v1/downloadCSV`, {
        method: "GET",
        headers: {
          Authorization: sessionStorage.token, // Assuming sessionStorage.token contains the authentication token
          "Content-Type": "application/zip", // Set the appropriate content type for the response
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch ZIP file");
      }
  
      // Log the response for debugging purposes
      console.log(response);
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
  
      // Create an anchor element to trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = "downloaded_file.zip"; // Set the filename for the downloaded file
      document.body.appendChild(a);
      a.click();
  
      // Cleanup
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading ZIP file:", error);
    }
  };


 

  const columns = [
    { field: "id", headerName: "SR.NO", width: 100, headerClassName: "header" },
    {
      field: "AccountCode",
      headerName: "Account Code",
      width: 100,
      headerClassName: "header",
    },
    {
      field: "DebitBalance",
      headerName: "Debit Balance",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CreditBalance",
      headerName: "Credit Balance",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "NET_BALANCE",
      headerName: "NET_BALANCE",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CD_MARGIN",
      headerName: "CD_MARGIN",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "FO_MARGIN",
      headerName: "FO_MARGIN",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CM_MARGIN",
      headerName: "CM_MARGIN",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "FO_LEDG",
      headerName: "FO_LEDG",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CD_LEDG",
      headerName: "CD_LEDG",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CM_LEDG",
      headerName: "CM_LEDG",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "FO_COL",
      headerName: "FO_COL",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CD_COL",
      headerName: "CD_COL",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CM_COL",
      headerName: "CM_COL",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Fixed_AMT",
      headerName: "Fixed_AMT",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Fixed_SEG",
      headerName: "Fixed_AMT",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "liq_bees_AMT",
      headerName: "Liq_Bees_AMT",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "pref_SEG",
      headerName: "pref_SEG",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CM_IdFO",
      headerName: "CM_IdFo",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Member_IdFO",
      headerName: "Member_IdFo",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CM_IdCD",
      headerName: "CM_IdCd",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Member_IdCD",
      headerName: "Member_IdCd",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CM_IdCM",
      headerName: "CM_IdCM",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "Member_IdCM",
      headerName: "Member_IdCM",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CReq_CD",
      headerName: "CReq_CD",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CReq_CM",
      headerName: "CReq_CM",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "CReq_FO",
      headerName: "CReq_FO",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "totcash_req",
      headerName: "TotCash_Req",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "net_utilisation",
      headerName: "Net_Utilisation",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "cd_allocate",
      headerName: "Cd_Allocate",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "cm_allocate",
      headerName: "CM_Allocate",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "available_balance",
      headerName: "Available_Balance",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "fo_allocate",
      headerName: "Fo_Allocate",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "excess",
      headerName: "Excess",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "total_allocate",
      headerName: "Total_Allocate",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "funded_allocation",
      headerName: "Funded_Allocation",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "final_cm_allocation",
      headerName: "Final_CM_Allocation",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "final_fo_allocation",
      headerName: "Final_FO_Allocation",
      width: 120,
      headerClassName: "header",
    },
    {
      field: "final_cd_allocation",
      headerName: "Final_CD_Allocation",
      width: 120,
      headerClassName: "header",
    },
  ];

  return (
    <section className="dashboard">
      <div className="container">
        <div className="card col-sm-12">
          <div className="card-body col-sm-12">
            <div>
              <h4>FinalReportTable</h4>
            </div>


            <button className="btn btn-outline-secondary  " onClick={handleDownloadCsv}>
              Download Coll File
            </button>

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
                      rows={ReportsData}
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
  );
}
