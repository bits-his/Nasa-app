import React from "react";

export const HeaderSpace = ({ navigate }) => { 
  return (
    <>
      <div id="header">
        <nav>
          <label className="logo">
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
          </ul>
        </nav>
      </div>
    </>
  );
};
