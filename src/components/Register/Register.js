import React from "react";
import "./register.css";
import { FormGroup, Label, Input, Card, CardBody, CardTitle } from "reactstrap";

const Register = () => {
  return (
    <div className="register">
      <h4>
        <strong>IFRC Desk Booking</strong>
      </h4>
      <div className="box">
        <Card className="mx-auto p-4" style={{ width: "25rem" }}>
          <CardTitle tag="h5" className="fw-bold mb-1">
            Register
          </CardTitle>
          <hr className="w-25 mx-auto" />
          <CardBody>
            <FormGroup>
              <Label for="exampleEmail" className="fw-bold">
                Email
              </Label>
              <Input id="exampleEmail" name="email" type="email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword" className="fw-bold">
                Password
              </Label>
              <Input id="examplePassword" name="password" type="password" />
            </FormGroup>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Register;
