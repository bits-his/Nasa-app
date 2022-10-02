import React, { useState } from "react";
import { Bookmark, ChevronDown, ChevronUp } from "react-feather";
import { useNavigate } from "react-router-dom";
import {
  Col,
  Row,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import "./home.css";
import SearchBar from "./SearchBar";
import "./homeBAckground.css";
export default function Home() {
  const [results, setResults] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <>
      <HeaderSpace navigate={navigate} />
      <Row className="m-0 p-0">
        <Col md={2}>
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1" style={{fontSize: '3px'}}>NASA RESOURCES</AccordionHeader>
              <AccordionBody accordionId="1">
                <strong>This is the first item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                EUROPEAN SPACE AGENCY
              </AccordionHeader>
              <AccordionBody accordionId="2">
                <strong>This is the second item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                COMISIÓN NACIONAL...
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <strong>This is the third item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">
                CANADIAN SPACE AGENCY
              </AccordionHeader>
              <AccordionBody accordionId="4">
                <strong>This is the third item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="5">
                BRAZILIAN SPACE AGENCY
              </AccordionHeader>
              <AccordionBody accordionId="5">
                <strong>This is the third item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="6">
                BRAZILIAN SPACE AGENCY
              </AccordionHeader>
              <AccordionBody accordionId="6">
                <strong>This is the third item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="7">
                OTHER EXAMPLE RESOURCES
              </AccordionHeader>
              <AccordionBody accordionId="7">
                <strong>This is the third item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It&#39;s also worth noting that just about
                any HTML can go within the <code>.accordion-body</code>, though
                the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </Col>
        <Col md={8}>
          <SearchBar results={results} setResults={setResults} />
          <Row className="p-0 mt-3 m-0">
            {/* <Col md={2} xs={0} sm={0}></Col> */}
            <Col md={12}>
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
                      <h4
                        className="sub-heading m-0"
                        onClick={() => {
                          window.location.replace(item._source.link);
                        }}
                      >
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
            {/* <Col md={2} xs={0} sm={0}></Col> */}
          </Row>
        </Col>
        <Col md={2} />
      </Row>

      <div class="view">
        <div class="plane main">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </>
  );
}

export const HeaderSpace = () => {
  const navigate = useNavigate();
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
              >
                Live stream
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/publish")}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                Publish
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/sign-up")}
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
