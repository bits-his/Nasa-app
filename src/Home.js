import React, { useState } from "react";
import { Bookmark, ChevronDown, ChevronUp } from "react-feather";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import "./home.css";
import SearchBar from "./SearchBar";
export default function Home() {
  const [results, setResults] = useState();

  return (
    <>
      <div id="header">
        <nav>
          <label className="logo">Space Gateway</label>
          <ul>
            <li>
              <span href="#" style={{ textDecoration: "none" }}>
                Sign Up
                <i className="fas fa-caret-down"></i>
              </span>
              <ul></ul>
            </li>
            <li>
              <span href="#" style={{ textDecoration: "none" }}>
                Login
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <Row className="m-0 p-0">
        <Col md={2} />
        <Col md={8}>
          <SearchBar results={results} setResults={setResults} />
        </Col>
        <Col md={2} />
      </Row>

      <Row className="p-0 mt-3">
        <Col md={2}></Col>
        <Col md={8}>
          {results &&
            results.map((item, index) => (
              <div className="row">
                <div className="col-md-1">
                  <Row>
                    <ChevronUp size={27} color="grey" />
                  </Row>
                  <div className="text-center">{item.vote}</div>
                  <Row>
                    <ChevronDown size={27} color="grey" />{" "}
                  </Row>
                  <Row>
                    <Bookmark size={27} color="grey" />{" "}
                  </Row>
                </div>
                <div className="col-md-8">
                  <p style={{ fontSize: "11px" }} className="m-0">
                    {item._source.link}
                  </p>
                  <h4
                    className="sub-heading m-0"
                    onClick={() => {
                      window.location.replace(item._source.link);
                    }}
                  >
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
        <Col md={2}></Col>
      </Row>
    </>
  );
}
