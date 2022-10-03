import React from "react";
import SideBar from "./SideBar";

export const HeaderSpace = ({ navigate }) => { 
  return (
    <>
      <div 
        className="header"
        id="header"
        >
        <nav>
          <label className="space-gateway ">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Space Gateway
            </div>
          </label>
          <ul>
            <li>
              <span
                onClick={() => navigate("/live")}
                style={{ textDecoration: "none", cursor: "pointer" }}
                className= 'live-stream'
              >
                Live stream
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/profile")}
                className= 'live-stream'
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                Profile
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/publish")}
                className= 'live-stream'
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                Publish
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/sign-up")}
                className= 'live-stream'
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                Sign Up
                <i className="fas fa-caret-down"></i>
              </span>
              <ul></ul>
            </li>
            <li>
              <span
                onClick={() => navigate("/login")}
                className= 'live-stream'
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                Login
              </span>
            </li>
            <div className="nav-toggle">
              <SideBar />
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};
