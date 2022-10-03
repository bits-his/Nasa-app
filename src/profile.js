import React, { useState } from "react";
// import { Typeahead } from "react-bootstrap-typeahead";
import { Mail } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col,  Row } from "reactstrap";
import { HeaderSpace } from "./HeaderSpace";
// import { HeadNavbar } from "./HeadNavbar";
import "./sigup.css";
import User from "./user.png"
import "./wow.css"
function SignUp() {
//   const _form = {
//     name: "",
//     username: "",
//     role: "",
//     last_name: "",
//     email: "",
//     password: "",
//     comfarm_password: "",
//   };
  // const navigate = useNavigate()
//   const [form, setForm] = useState(_form);

  const navigate = useNavigate();
//   const handleChange = ({ target: { name, value } }) =>
//     setForm((p) => ({ ...p, [name]: value }));

//   const handleAdd = (e) => {
//     console.log(form);
//     fetch("https://nasa-space-gateway.herokuapp.com/api/users/create", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     })
//       .then((raw) => raw.json())
//       .then(() => {
//         alert("Account created successfully");
//         navigate("/");
//       })

//       .then((err) => console.log(err));
//     setForm(_form);
//   };
  
//   const options = [
//     {
//         name:"publisher"
//     },
//     {
//         name:"researcher"
//     },
//     {
//         name:"scientist"
//     },
//     {
//         name:"student"
//     }
//   ]
  const [state, setState] = useState();
  const [setNewImage]=useState([])
  function handleImage(e) {
    const file = e.target.files[0]
    let reader = new FileReader()
    reader.onloadend = () => {
      setNewImage(e.target.files[0]);
      setState(reader.result)
    }
    reader.readAsDataURL(file)
    // console.log(file)
  }
  return (
    <div className="bg-dark">
      <HeaderSpace navigate={navigate} />
      <Row className="m-0 p-0">
        <Col md={4}></Col>
        <Col md={4}>
          <div className="bodys">
            <Card className="p-5 m-1 signin-card" style={{ borderRadius: 10 }}>
              <center>
              <Row className="m-0 p-0">
            <Col m4={4}></Col>
            <Col m4={4}>
            <div className="profile-pic-wrapper">
            <div className="pic-holder">
              {/* <img
                      id="profilePic"
                      class="pic"
                      src={profile}
                    /> */}

              <label for="newProfilePhoto" className="upload-file-block">
                Upload image
              </label>
              <input
                className="uploadProfileInput"
                type="file"
                name="profile_pic"
                id="newProfilePhoto"
                accept="image/*"
                style={{ display: "none" }}
                onChange={
                  handleImage
                }
              />
              <>
                {
                  state ?
                    <img
                      src={state && state}
                      alt="hello"
                    style={{
                      width: "190px",
                      height: "150px",
                    }}
                    /> : <img src={User} className="rounded" alt="good" /> 
                }
              </>
            </div>
          </div>
          <br />
          <div>
            <Mail /> <Button color="danger" size="sm">Subscribe</Button>
          </div>
            </Col>
            <Col m4={4}></Col>
          </Row>
             
              </center>
              <hr></hr>
              <Row>
                <Col md={1}></Col>
                <Col md={10}>
                  <Col md={12}>
                  <h2>Name :</h2>
                  <p>Abdulsalam</p>
                  </Col>
                  <Col md={12}>
                  <h2>User Name :</h2>
                  <p>Abdulsalam</p>
                  </Col>
                  <Col md={12}>
                  <h2>Email :</h2>
                  <p>Abdulsalamabubaka023@gmail.com</p>
                  </Col>

                

                  <center>
                    <Button
                      style={{ backgroundColor: "black" }}
                      className="mt-3"
                      onClick={()=>navigate("/")}
                    >
                      GO TO THe App
                    </Button>
                  </center>

                </Col>
                <Col md={1}></Col>
              </Row>
            </Card>
          </div>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
export default SignUp;
