import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import Alerts from "./Alerts";

export default function NavBar(props) {
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    props.alert("Logged Out", "success");
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <>
      {sessionStorage.token && (
        <nav
          className="navbar  navbar-expand-lg navbar-light fixed-top"
          style={{ backgroundColor: "white" }}
        >
          <div className="container-fluid justify-content-between">
            <button className="navbar-toggler " type="button">
              <span className="navbar-toggler-icon " />
            </button>
            <Link className="navbar-brand ms-2 font-weight-bold" to={"#"}>
              RTRMS
            </Link>
            <div className="">
              <Alerts alert={props.alert1} />
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="mt-3">Admin</div>
              </li>

              <li>
                <Link
                  className="nav-link"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Stack direction="row" >
                    <Avatar sx={{ width: 40, height: 35, bgcolor: deepOrange[500] }}>AD</Avatar>
                  </Stack>
                </Link>

                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end mr-2 ">
                  {/* <li>
                    <Link className="dropdown-item">My Account</Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li> */}
                  <li>
                    <Link to="/" className="dropdown-item text-center" onClick={logout}>
                    <i class="fa-solid fa-right-from-bracket"></i><span className="ms-2">LogOut</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <SideBar />
        </nav>
      )}
    </>
  );
}
