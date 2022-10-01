import React, { useState } from "react"
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Col, Row } from "reactstrap";
import  "./home.css"
import SearchBar from "./SearchBar";
export default function Home(){
    const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const SEARCH_URI = 'https://api.github.com/search/users';
  const handleSearch = (query: string) => {
    setIsLoading(true);

    fetch(`${SEARCH_URI}?q=${query}+in:login&page=1&per_page=50`)
      .then((resp) => resp.json())
      .then(({ items }: Response) => {
        setOptions(items);
        setIsLoading(false);
      });
  };
  const filterBy = () => true;

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
    <div className="title">
        <Row className="p-0 m-0">
            <Col md={2}></Col>
            <Col md={8}><SearchBar /></Col>
            <Col md={2}></Col>
        </Row>
</div>
  </div> </div>
      
    <div id="contents">
      <h2>Search results(0)</h2>
      
      <p>https://developer.mozilla.org › References › CSS</p>
      <h3>content - CSS: Cascading Style Sheets - MDN Web Docs</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
        </>
    )
}