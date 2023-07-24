import React from 'react'
import '../styles/SideBar.css'
import {Link } from "react-router-dom";

export default function SideBar() {

  return (
    <section className='sidebar mt-5'>
        <div className="area" ><nav className="main-menu">
          <ul>
            <li>
            <Link to="dashboard/" >
                <i className="fa fa-home fa-2x" />
                <span className="nav-text">
                  Dashboard
                </span>
            </Link>
            </li>
            <li className="has-subnav">
              <Link to="data/">
              <i class="fa fa-solid fa-database fa-2x"></i>
                <span className="nav-text">
                  Data
                </span>
              </Link>
            </li>
            <li className="has-subnav">
              <Link to="process/">
              <i class="fa fa-solid fa-person-running fa-2x"></i>
                <span className="nav-text">
                  Process
                </span>
              </Link>
            </li>
            <li className="has-subnav">
              <Link to="reports/">
              <i class="fa fa-regular fa-calendar-days fa-2x"></i>
                <span className="nav-text">
                  Report
                </span>
              </Link>
            </li>
            <li className="has-subnav">
              <Link to="#">
              <i className="fa fa-solid fa-desktop fa-2x"></i>
                <span className="nav-text">
                  Live Monitor
                </span>
              </Link>
            </li>



            {/* <li className="has-subnav">
              <Link to="bod/">
              <i class="fa fa-regular fa-calendar-days fa-2x"></i>
                <span className="nav-text">
                  BOD
                </span>
              </Link>
            </li>
            <li className="has-subnav">
              <Link to="#">
              <i className="fa fa-regular fa-bullseye fa-2x"></i>
                <span className="nav-text">
                  EOD-1
                </span>
              </Link>
            </li>
            <li className="has-subnav">
              <Link to="#">
              <i className="fa fa-solid fa-desktop fa-2x"></i>
                <span className="nav-text">
                  EOD-2
                </span>
              </Link>
            </li> */}
            
            
            
          </ul>
          
        </nav>
      </div>
      </section>
  )
}

