import React from "react";
import "./login.css";
import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h4>
        <img src="/images/ifrc.svg" alt="ifrc-logo" className="ifrc-logo" />
        <strong className="mx-2">IFRC Desk Booking</strong>
      </h4>
      <div className="box p-3">
        <Card
          className="mx-auto p-3 shadow bg-body rounded"
          style={{ maxWidth: "25rem" }}
        >
          <CardTitle tag="h5" className="fw-bold mb-1">
            Login
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
            <FormGroup check inline className="mt-4">
              <Input type="checkbox" />
              <Label check>Remember me</Label>
            </FormGroup>
            <Button color="primary" className="d-block mx-auto w-100 mt-4">
              Login
            </Button>
            <Link
              to="/forget-password"
              style={{ textDecoration: "none" }}
              className="text-center"
            >
              <h6 className="mt-4">Forget your password ?</h6>
            </Link>
            <div className="text-center mt-4">
              <span className="d-inline">Don't have account ? </span>
              <Link
                to="/register"
                style={{ textDecoration: "none" }}
                className="text-center"
              >
                <h6 className="mt-4 d-inline">Register</h6>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
