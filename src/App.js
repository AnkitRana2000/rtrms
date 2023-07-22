import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
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

function App() {
  return (
    <>
     <BrowserRouter>
     
      {/* <div style={{ display: 'flex', minHeight: '100vh' }}> */}
        {/* Set a fixed width for the sidebar container */}
        {/* <div style={{ flex: '0 0 200px', backgroundColor: '#f0f0f0' }}> */}
          <NavBar />
        {/* </div> */}
        {/* <div style={{ flex: '1', padding: '20px' }}> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<DashBoard/>} />
            <Route path="/bod" element={<BOD/>} />
            <Route path="/uploadfile" element={<UploadFile/>} />
            <Route path="/finalreport" element={<FinalReportTable/>} />
            <Route path="/fixedallocation" element={<FixedAllocation/>} />
            <Route path="/preferredSegment" element={<PreferredSegment/>} />
            <Route path="/uploadLiquiedBees" element={<UploadLiquiedBees/>} />
            <Route path="/uploadFixAndPref" element={<UploadFixedAllocation_PreferredSegment/>} />
            <Route path="/data" element={<Data/>} />
            <Route path="/process" element={<Process/>} />
            <Route path="/showDataLiquidBees" element={<ShowDataLiquidBees/>} />
            <Route path="/showDataFixAllocation" element={<ShowDataFixAllocation/>} />
          </Routes>
        {/* </div>
      </div> */}
    </BrowserRouter>
    </>
  );
}

export default App;
