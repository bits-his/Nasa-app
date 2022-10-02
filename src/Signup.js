import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";
import "./sigup.css";

function SignUp() {
  const _form = {
    name: "",
    username: "",
    role: "",
    last_name: "",
    email: "",
    password: "",
    comfarm_password: "",
  };
  // const navigate = useNavigate()
  const [form, setForm] = useState(_form);

  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleAdd = (e) => {
    console.log(form);
    fetch("https://nasa-space-gateway.herokuapp.com/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((raw) => raw.json())
      .then(() => {
        alert("Account created successfully");
        navigate("/");
      })

      .then((err) => console.log(err));
    setForm(_form);
  };
  
  const options = [
    {
        name:"publisher"
    },
    {
        name:"researcher"
    },
    {
        name:"scientist"
    },
    {
        name:"student"
    }
  ]
  return (
    <div className="new">
      <Row className="m-0 p-0">
        <Col md={4}></Col>
        <Col md={4}>
          <div className="body bodys">
            <Card className="p-5 m-1 signin-card" style={{ borderRadius: 10 }}>
              <center>
                <h3 className="signup">Sign Up</h3>
              </center>
              <hr></hr>
              <Row>
                <Col md={1}></Col>
                <Col md={10}>
                  <Col md={12}>
                    <Label style={{ color: "white" }}>Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={12}>
                    <Label style={{ color: "white" }}>User Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter your Username"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={12}>
                    <Label style={{ color: "white" }}>Role</Label>
                    <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          options={options}
          onInputChange={(e) => {
            const select = e[0]
            if(e.length){
            setForm((p) =>({
                ...p, role : select.name
               }) ) 
            }
          }}
          onChange={(e) => {
            const select = e[0]
            // alert(JSON.stringify(select))
            if(e.length){
setForm((p) =>({
                ...p, role : select.name
               }) ) 
            }
          }}
          placeholder="Choose a Role..."
        //   selected={singleSelections}
        />
                  </Col>

                  <Col md={12}>
                    <Label style={{ color: "white" }}>Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter your  email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={12}>
                    <Label style={{ color: "white" }}>Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter your  password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={12}>
                    <Label style={{ color: "white" }}>Comfirm Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter your  password"
                      name="comfarm_password"
                      value={form.comfarm_password}
                      onChange={handleChange}
                    />
                  </Col>

                  <center>
                    <Button
                      style={{ backgroundColor: "black" }}
                      className="mt-3"
                      onClick={handleAdd}
                    >
                      SIGNUP
                    </Button>
                  </center>

                  <center>
                    <p on style={{ fontSize: 12, marginTop: "1rem" ,cursor:"pointer"}} onClick={()=>navigate("/login")}>
                      Already have an account?
                      <span
                        style={{ fontSize: 12, cursor: "pointer" }}
                        // onClick={() => navigate("/Signin")}
                      >
                        Logn In
                      </span>{" "}
                      here!
                    </p>
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
