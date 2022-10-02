import React, { useState } from "react";
import { Bookmark, ChevronDown, ChevronUp } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import "./home.css";
import SearchBar from "./SearchBar";
export default function Home() {
  const [results, setResults] = useState();
  const navigate = useNavigate();
  return (
    <>
      <HeaderSpace navigate={navigate} />
      <Row className="m-0 p-0">
        <Col md={2} />
        <Col md={8}>
          <SearchBar results={results} setResults={setResults} />
        </Col>
        <Col md={2} />
      </Row>

      <Row className="p-0 mt-3 m-0">
        <Col md={2} xs={0} sm={0}></Col>
        <Col md={8}>
          {results &&
            results.map((item, index) => (
              <div className="d-flex">
                {/* <div className="col-md-8 col-xs-9 col-sm-9"> */}
                <div style={{ marginRight: "5px" }}>
                  <ChevronUp size={27} color="grey" />
                  <div style={{ marginLeft: "7px" }}>{item.vote}</div>
                  <ChevronDown size={27} color="grey" />{" "}
                </div>
                <div>
                  <p style={{ fontSize: "11px" }} className="m-0">
                    {item._source.link}
                  </p>
                  <h4 className="sub-heading m-0">
                    <Bookmark size={20} color="grey" />
                    {item._source.title}
                  </h4>
                  {/* ⭐⭐⭐ */}
                  <p>
                    <span style={{ color: "rgb(92, 89, 89)" }}>
                      {index + 1} days ago —{" "}
                    </span>
                    {item._source.description}
                  </p>
                  <br />
                </div>
              </div>
            ))}
        </Col>
        <Col md={2} xs={0} sm={0}></Col>
      </Row>
    </>
  );
}

export const HeaderSpace = ({ navigate  }) => {
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
                onClick={() => navigate("/publish")}
                style={{ textDecoration: "none" }}
              >
                Publish
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/sign-up")}
                style={{ textDecoration: "none" }}
              >
                Sign Up
                <i className="fas fa-caret-down"></i>
              </span>
              <ul></ul>
            </li>
            <li>
              <span
                onClick={() => navigate("/login")}
                style={{ textDecoration: "none" }}
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
