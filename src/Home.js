import React, { useState } from "react";
import {  Bookmark, ChevronDown, ChevronUp, Send } from "react-feather";
import { useNavigate } from "react-router-dom";
import {
  Col,
  Row,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import SearchBar from "./SearchBar";
import "./homeBAckground.css";
import { HeaderSpace } from "./HeaderSpace";
// import { HeadNavbar } from "./HeadNavbar";
export default function Home() {
  const [results, setResults] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <>
    {/* <HeadNavbar /> */}
      <HeaderSpace navigate={navigate} />
      <Row className="m-0 p-0">
        <Col md={2}>
          <h6>Training Catolog</h6>
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1" style={{ fontSize: "3px" }}>
                NASA RESOURCES
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <li><Send style={{
                  padding: 6
                }} />
                    <a href="https://appliedsciences.nasa.gov/what-we-do/capacity-building/arset" target="_blank" rel="noreferrer">
                      <small>NASA Applied Remote Sensing Training (ARSET) Program</small></a>
                </li>
                <li><Send style={{
                  padding: 6
                }} />
                    <a href="https://eodashboard.org/" target="_blank" rel="noreferrer">
                      <small>EO Dashboard</small></a>
                </li>
                <li><Send style={{
                  padding: 6
                }} />
                    <a href="https://eo-college.org/courses/" target="_blank" rel="noreferrer">
                      <small>EO College Courses</small></a>
                </li>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                EUROPEAN SPACE AGENCY
              </AccordionHeader>
              <AccordionBody accordionId="2">
                <li><Send style={{
                  padding: 6
                }} />
                    <a href="https://www.un-spider.org/" target="_blank" rel="noreferrer">
                      <small>The United Nations Platform for Space-based Information for Disaster Management and Emergency Response (UN-SPIDER) Knowledge Portal</small></a>
                </li>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                COMISIÓN NACIONAL...
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <li><Send style={{
                  padding: 6
                }} />
                    <a href="https://www.argentina.gob.ar/ciencia/conae/unidad-educacion/cursos-y-capacitaciones" target="_blank" rel="noreferrer">
                      <small>Massive Training Unit</small></a>
                </li>
                <li><Send style={{
                  padding: 6
                }} />
                    <a href="https://ig.conae.unc.edu.ar/estudiar-en-el-ig/" target="_blank" rel="noreferrer">
                      <small>Instituto de Altos Estudios Espaciales Mario Gulich</small></a>
                </li>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">
                CANADIAN SPACE AGENCY
              </AccordionHeader>
              <AccordionBody accordionId="4">
                <li><Send style={{
                  padding: 6
                }} />
                    <a href="http://www.dgi.inpe.br/DIDGI" target="_blank" rel="noreferrer">
                      <small>Remote Sensing Tutorial</small></a>
                </li>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="6">
                BRAZILIAN SPACE AGENCY
              </AccordionHeader>
              <AccordionBody accordionId="6">
                <li><Send style={{
                  padding: 6
                }} />
                    <a href="https://www.nrcan.gc.ca/maps-tools-and-publications/satellite-imagery-and-air-photos/tutorial-fundamentals-remote-sensing/9309" target="_blank" rel="noreferrer">
                      <small>National Institute for Space Research (INPE) EO Coordination</small></a>
                </li>
                <li><Send style={{
                  padding: 6
                }} />
                    <a href="https://eo-college.org/courses/winter-water-warming-canadian-sar-applications/" target="_blank" rel="noreferrer">
                      <small>Winter-Water-Warming: Canadian Synthetic Aperture Radar Applications</small></a>
                </li>
                <li><Send style={{
                  padding: 6
                }} />
                    <a href="https://github.com/asc-csa" target="_blank" rel="noreferrer">
                      <small>CSA GitHub with EO Scripts and Tutorials</small></a>
                </li>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="7">
                OTHER EXAMPLE RESOURCES
              </AccordionHeader>
              <AccordionBody accordionId="7">
                <li><Send style={{
                  padding: 6
                }} />
                    <a href="https://www.un-spider.org/" target="_blank" rel="noreferrer">
                      <small>The United Nations Platform for Space-based Information for Disaster Management and Emergency Response (UN-SPIDER) Knowledge Portal</small></a>
                </li>
                <li><Send style={{
                  padding: 6
                }} />
                    <a href="https://public.wmo.int/en/resources/training/wmolearn" target="_blank" rel="noreferrer">
                      <small>WMOLearn, a World Meteorological Organization (WMO) resource</small></a>
                </li>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </Col>
        <Col md={8}>
          <SearchBar results={results} setResults={setResults} />
          <Row className="p-0 mt-3 m-0">
            {/* <Col md={12} xs={12} sm={12}></Col> */}
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
                      >
                        <Bookmark size={20} color="grey" />
                        <a href={item._source.link} target="_blank" rel="noreferrer">{item._source.title}</a>
                        
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
                    <a
                      href={item._source.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item._source.title}
                    </a>
                    <Bookmark size={20} color="grey" />
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
