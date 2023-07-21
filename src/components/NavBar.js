import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

import {  useNavigate } from "react-router-dom";



export default function NavBar() {
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <>
      {sessionStorage.token &&
      <nav
        className="navbar  navbar-expand-lg navbar-light fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid ">
          <button className="navbar-toggler " type="button">
            <span className="navbar-toggler-icon " />
          </button>
          <Link className="navbar-brand" to={"#"}>
            
           RTRMS
          </Link>

          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="mt-2">123</div>
            </li>
          
          <li>
          <Link
            className="nav-link"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          > 
            <i
              className="fa-solid fa-user fa-2xl  me-2"
              style={{ color: "#303d4e" }}
            ></i>
            {/* <img src={Profile} className='me-3' style={{ height:"40px",width:"50px"}}  /> */}
          </Link>

          <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end mr-2 ">
            <li>
              <Link className="dropdown-item" >
                My Account
              </Link>
            </li>

  
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link to ="/" className="dropdown-item" onClick={logout}>
                LogOut
              </Link>
            </li>
          </ul>

          </li>
          </ul>
        </div>
        <SideBar/>
      </nav>
      
      }
      </>
  );
}
