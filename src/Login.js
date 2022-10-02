import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";
import { HeaderSpace } from "./Home";
import "./sigup.css";

function SingIn() {
  const _form = {
    username: "",
    password: "",
  };
  // const navigate = useNavigate()
  const [form, setForm] = useState(_form);
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleAdd = (e) => {
    console.log(form);
    fetch("https://nasa-space-gateway.herokuapp.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((raw) => raw.json())
      .then((data) => {
        localStorage.setItem("@@_data", JSON.stringify(data));
        alert("sucess");
        navigate("/profile");
      })

      .then((err) => console.log(err));
    setForm(_form);
  };
  return (
    <div className="new">
      <HeaderSpace />
      <Row className="p-0 ">
        <Col md={4}></Col>
        <Col md={4} className="mt-2">
          <div className="body">
            <Card className="p-5 m-1 signin-card" style={{ borderRadius: 10 }}>
              <center>
                <h3 className="signup">Sign In</h3>
              </center>
              <hr></hr>
              <Row className="m-0 p-0">
                <Col md={1}></Col>
                <Col md={10}>
                  <Col md={12}>
                    <Label>Email</Label>
                    <Input
                      type="username"
                      placeholder="Enter your  username"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={12}>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter your  password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                    />
                  </Col>
                  <center>
                    <Button
                      style={{ backgroundColor: "black" }}
                      className="mt-3"
                      onClick={handleAdd}
                    >
                      LOGIN
                    </Button>
                  </center>
                  <center className="mt-3 sub-heading m-0">
                    Forgot password
                  </center>
                  <center
                    className="mt-1 sub-heading m-0"
                    onClick={() => {
                      navigate("/sign-up");
                    }}
                  >
                    Register
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
export default SingIn;
