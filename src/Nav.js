import React from "react";
import "./home.css"
export default function Nav (){
    return(
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
</div>
    )
}