// import React, { useState } from 'react';
// import '../styles/sample.css'; // Make sure to import the CSS file
// import NavBar from "../../src/components/Features/NavBar";

// export default function Sample() {
  
//     const [mini, setMini] = useState(true);

//   const toggleSidebar = () => {
//     if (mini) {
//       console.log("opening sidebar");
//       document.getElementById("mySidebar").style.width = "250px";
//       document.getElementById("main").style.marginLeft = "250px";
//       setMini(false);
//     } else {
//       console.log("closing sidebar");
//       document.getElementById("mySidebar").style.width = "85px";
//       document.getElementById("main").style.marginLeft = "85px";
//       setMini(true);
//     }
//   };

//   return (
//     <>
//     <NavBar/>
//     <div style={{"marginTop":"90px"}}>
        
//       <div style={{"marginTop":"60px"}} id="mySidebar" className={`sidebar  ${!mini ? '' : 'open'}`  } onMouseOver={toggleSidebar} onMouseOut={toggleSidebar}>
//         <a href="#"><span><i className="fa-solid fa-house fa-xl"></i><span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</span></span></a><br />
//         <a href="#"><span><i className="fa-solid fa-database fa-xl"></i><span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Data</span></span></a><br />
//         <a href="#"><span><i className="fa-solid fa-person-running fa-xl"></i><span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Process</span></span></a><br />
//         <a href="#"><span><i className="fa-regular fa-calendar-days fa-xl"/><span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;Report</span></span></a>
//       </div>

//       <div id="main">
//         <h2>Open/Collapse Sidebar on Hover</h2>
//         <p>Hover over any part of the sidebar to open it.</p>
//         <p>To close the sidebar, move your mouse out of the sidebar.</p>
//       </div>
//     </div>
//     </>
//   );

// }


