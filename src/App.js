import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import  { useState } from "react";
import NavBar from "./components/Features/NavBar";
import SideBar from "./components/Features/SideBar";
import Login from "./components/Features/Login";
import DashBoard from "./components/DashBoard/DashBoard";
import BOD from "./components/Process/BOD";
import UploadFile from "./components/Process/UploadFile";
import FinalReportTable from "./components/Reports/FinalReportTable";
import FixedAllocation from "./components/Data/FixedAllocation";
import PreferredSegment from "./components/PreferredSegment";
import UploadLiquiedBees from "./components/Data/UploadLiquiedBees";
import UploadFixedAllocation_PreferredSegment from "./components/UploadFixedAllocation_PreferredSegment";
import Data from "./pages/Data";
import Process from "./pages/Process";
import ShowDataLiquidBees from "./components/Data/ShowDataLiquidBees";
import ShowDataFixAllocation from "./components/Data/ShowDataFixAllocation";
import Reports from "./pages/Reports";
import Alerts from "./components/Features/Alerts";
import UploadFixAllocation from "./components/Data/UploadFixAllocation";
import LiveMonitor from "./pages/LiveMonitor";
import OverAllUtilisation from "./components/LiveMonitor/OverAllUtilisation";


function App() {
  const [alert, setAlert] = useState(null)
  const showalert=(msg,type)=>{
      setAlert({msg:msg,type:type})
      setTimeout(()=>{
       setAlert(null) 
      },4000)
  }
  return (
    <>
      <BrowserRouter> 
        <NavBar alert={showalert} alert1={alert}/>
      {/* <Alerts alert={alert}/> */}
        <Routes>
          <Route path="/" element={<Login alert={showalert}/>} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/bod" element={<BOD />} />
          <Route path="/uploadfile" element={<UploadFile alert={showalert} />} />
          <Route path="/finalreport" element={<FinalReportTable alert={showalert}/>} />
          <Route path="/fixedallocation" element={<FixedAllocation />} />
          <Route path="/preferredSegment" element={<PreferredSegment />} />
          <Route path="/uploadLiquiedBees" element={<UploadLiquiedBees />} />
          <Route path="/uploadFixAllocation" element={<UploadFixAllocation />} />
          <Route
            path="/uploadFixAndPref"
            element={<UploadFixedAllocation_PreferredSegment />}
          />
          <Route path="/data" element={<Data />} />
          <Route path="/process" element={<Process />} />
          <Route path="/showDataLiquidBees" element={<ShowDataLiquidBees alert={showalert}/>} />
          <Route
            path="/showDataFixAllocation"
            element={<ShowDataFixAllocation alert={showalert}/>}
          />
          <Route path="/reports" element={<Reports />} />
          <Route path="/liveMonitor" element={<LiveMonitor />} />
          <Route path="/overAllUtilisation" element={<OverAllUtilisation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
