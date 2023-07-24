import React, { useEffect, useState } from "react";
import urlData from "../auth.json";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "../../src/styles/DashBoard.css";
import UploadLiquiedBees from "./UploadLiquiedBees";
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';


export default function ShowDataLiquidBees() {
  const [LiquidBeesData, setLiquidBeesData] = useState([]);

  const fetchLiquidBeesData = async () => {
    try {
      let response = await fetch(`${urlData.urlData.url}/v1/getLiquidBeesData`, {
        method: "GET",
        headers: {
          authToken: sessionStorage.token,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch ReportsData ");
      }
      const data = await response.json();
      const LiquidBeesData = data.data.map((data, index) => ({
        ...data,
        id: index + 1,
      }));
      setLiquidBeesData(LiquidBeesData);
      // console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLiquidBeesData();
  }, []);


    const columns = [
        { field: 'id', headerName: 'SNo', flex: 1 },
        { field: 'Client_id', headerName: 'Client_id', flex: 1 },
        { field: 'Liquid_Bees', headerName: 'Liquid_Bees', flex: 1 },
         
      ];

      
  return (
    <>
    <section className="dashboard">
      <div className="container">
        <div className="card col-sm-12">
          <div className="card-body col-sm-12">
            <div>
              <h4>Show Data Liquid Bees</h4>
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
                      rows={LiquidBeesData}
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
    <UploadLiquiedBees/>
    </>
  );
}
