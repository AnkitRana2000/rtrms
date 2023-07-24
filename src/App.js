import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import  { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import BOD from "./components/BOD";
import UploadFile from "./components/UploadFile";
import FinalReportTable from "./components/FinalReportTable";
import FixedAllocation from "./components/FixedAllocation";
import PreferredSegment from "./components/PreferredSegment";
import UploadLiquiedBees from "./components/UploadLiquiedBees";
import UploadFixedAllocation_PreferredSegment from "./components/UploadFixedAllocation_PreferredSegment";
import Data from "./pages/Data";
import Process from "./pages/Process";
import ShowDataLiquidBees from "./components/ShowDataLiquidBees";
import ShowDataFixAllocation from "./components/ShowDataFixAllocation";
import Reports from "./pages/Reports";
import Alerts from "./components/Alerts";


function App() {
  const [alert, setAlert] = useState(null)
  const showalert=(msg,type)=>{
      setAlert({msg:msg,type:type})
      setTimeout(()=>{
       setAlert(null) 
      },2000)
  }
  return (
    <>
      <BrowserRouter>
        <NavBar alert={showalert}/>
        <Alerts alert={alert}/>
        <Routes>
          <Route path="/" element={<Login alert={showalert}/>} />
          <Route path="/dashboard" element={<DashBoard  />} />
          <Route path="/bod" element={<BOD />} />
          <Route path="/uploadfile" element={<UploadFile alert={showalert} />} />
          <Route path="/finalreport" element={<FinalReportTable alert={showalert}/>} />
          <Route path="/fixedallocation" element={<FixedAllocation />} />
          <Route path="/preferredSegment" element={<PreferredSegment />} />
          <Route path="/uploadLiquiedBees" element={<UploadLiquiedBees />} />
          <Route
            path="/uploadFixAndPref"
            element={<UploadFixedAllocation_PreferredSegment />}
          />
          <Route path="/data" element={<Data />} />
          <Route path="/process" element={<Process />} />
          <Route path="/showDataLiquidBees" element={<ShowDataLiquidBees />} />
          <Route
            path="/showDataFixAllocation"
            element={<ShowDataFixAllocation />}
          />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
