import React from "react";
import { useLocation } from "react-router-dom";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import './Layouts.css';


const Layout = ({ children }) => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
  
    return (
      <>
        {!isLoginPage && <Topbar />}
        <div className="layout-container">
          {!isLoginPage && <Sidebar className="sidebar" />}
          <div className="otros">
            {children}
          </div>
        </div>
      </>
    );
  };
  
  export default Layout;

