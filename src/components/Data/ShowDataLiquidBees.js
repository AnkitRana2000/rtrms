import React, { useEffect, useState } from "react";
import urlData from "../../auth.json";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "../../styles/DashBoard.css";
import UploadLiquiedBees from "./UploadLiquiedBees";
import LiquiedBees from "./LiquiedBees";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

export default function ShowDataLiquidBees(props) {
  const [liquidBeesData, setLiquidBeesData] = useState([]);
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleDeleteConfirmation = (params) => {
    setSelectedRow(params.row);
    setOpenConfirmationDialog(true);
  };

  const handleDeleteCancel = () => {
    setOpenConfirmationDialog(false);
  };

  const handleDeleteConfirm = () => {
    setOpenConfirmationDialog(false);
    deleteEntry(selectedRow);
  };

  const fetchLiquidBeesData = async () => {
    try {
      let response = await fetch(
        `${urlData.urlData.url}/v1/getLiquidBeesData`,
        {
          method: "GET",
          headers: {
            authToken: sessionStorage.token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch ReportsData ");
      }
      
      const data = await response.json();
      const liquidBeesData = data.data.map((data, index) => ({
        ...data,
        id: index + 1,
      }));
      setLiquidBeesData(liquidBeesData);
      // console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLiquidBeesData();
  }, []);

  const deleteEntry = async (params) => {
    console.log(selectedRow)
    let client_id = selectedRow.Client_id
   
    let response = await fetch(
      `${urlData.urlData.url}/v1/delete_liquidbees/${client_id}`,
      {
        method: "POST",
        headers: {
          authToken: sessionStorage.token,
        },
      }
    );
    let resJson = await response.json();
    console.log(resJson);
    if (resJson.status == "success") {
      props.alert(resJson.message, "success");
    } else {
      props.alert(resJson.message, "warning");
    }
    fetchLiquidBeesData();
  };



  const columns = [
    { field: "id", headerName: "SNo", flex: 1 },
    { field: "Client_id", headerName: "Client_id", flex: 1 },
    {
      field: "Liquid_Bees",
      headerName: "Liquid_Bees",
      flex: 1,
      editable: true,
      
    },
    {
      field: "Delete",
      headerName: "Delete",
      renderCell: (params) => {
        return (
          <Button
            onClick={() => {
              handleDeleteConfirmation(params)
            }}
          >
            <i class="fa-solid fa-trash"></i>
          </Button>
        );
      },
    },
    // {
    //   field: "Edit",
    //   headerName: "Edit",
    //   renderCell: () => {
    //     return <Button onClick={(e)=>handleLiquiedBees(e)}>Edit</Button>;
    //   },
    // },
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
                        sx={{
                          margin: "10px",
                          padding: "10px",
                          fontSize: "17px",
                        }}
                        rowHeight={30}
                        columnHeaderHeight={30}
                        rows={liquidBeesData}
                        columns={columns}
                      />
                    </Box>

                    <Dialog
                      open={openConfirmationDialog}
                      onClose={handleDeleteCancel}
                    >
                      <DialogTitle>Delete Entry</DialogTitle>
                      <DialogContent>
                      Are you sure you want to delete {selectedRow?selectedRow.Client_id:""} Client?
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleDeleteCancel} color="primary">
                          Cancel
                        </Button>
                        <Button
                          onClick={handleDeleteConfirm}
                          color="primary"
                          autoFocus
                        >
                          Confirm
                        </Button>


                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UploadLiquiedBees alert={props.alert} />
      <LiquiedBees fetchLiquidBeesData={fetchLiquidBeesData} alert={props.alert} />
    </>
  );
}
