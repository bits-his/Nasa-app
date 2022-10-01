import React, { useState } from "react"
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Col, Row } from "reactstrap";
import  "./home.css"
import SearchBar from "./SearchBar";
export default function Home(){
    const [isLoading, setIsLoading] = useState(false);
  const [results,setResults]=useState()

    return(
        <>
        <div id="header">
    <nav>
      <label className="logo">Space Gateway</label>
      <ul>
{/* <li><a className="active" href="#">Home</a></li> */}
{/* <li><a href="#">Languages
          <i className="fas fa-caret-down"></i>
        </a>
          <ul>

</ul>
</li> */}
<li><a href="#" style={{textDecoration:"none"}}>Sign Up
          <i className="fas fa-caret-down"></i>
        </a>
          <ul>
{/* <li><a href="#">Front End</a></li>
<li><a href="#">Back End</a></li>
<li><a href="#">Others
              <i className="fas fa-caret-right"></i>
            </a>
              <ul>
<li><a href="#">Links</a></li>
<li><a href="#">Works</a></li>
<li><a href="#">Status</a></li>
</ul>
</li> */}
</ul>
</li>
<li><a href="#" style={{textDecoration:"none"}}>Login</a></li>
<li><a href="#" ><i className="fab fa-facebook-f"></i></a></li>
<li><a style={{paddingLeft: 0}} href="#"><i className="fab fa-twitter"></i></a></li>
<li><a style={{paddingLeft: 0}} href="#"><i className="fab fa-instagram"></i></a></li>
</ul>
</nav>



  <div className="hero">
    {/* {JSON.stringify(results)} */}
    <div className="title">
        <Row className="p-0 m-0">
            <Col md={2}></Col>
            <Col md={8}><SearchBar results={results} setResults={setResults}/></Col>
            <Col md={2}></Col>
        </Row>
</div>
  </div> </div>
      <Row className="p-0 m-0">
        <Col md={2}></Col>
        <Col md={8}>
        <div id="contents">
      <h2>Search results({results&&results.length})</h2>
      {
        results&&results._source.map(item=><>
          <p style={{fontSize:"11px"}} className="m-0">{item.link}</p>
      <h4 className="sub-heading m-0">{item.title}</h4>
      <p><span style={{color:"rgb(92, 89, 89)"}}>5 days ago — </span>{item.description}.....</p>
      <br />
        </>)
      }
    
      
    </div>
        </Col>
        <Col md={2}></Col>
   
    </Row>
    
    
        </>
    )
}