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
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(credentials);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(credentials));
    // setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const errorStyle = {
    fontSize: "11px",
    color: "red",
    marginTop: "11px",
  };

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
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="email" className="fw-bold">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                />
                <span style={errorStyle}>{error.email}</span>
              </FormGroup>
              <FormGroup>
                <Label for="password" className="fw-bold">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                />
                <span style={errorStyle}>{error.password}</span>
              </FormGroup>
              <FormGroup check inline className="mt-4">
                <Input type="checkbox" />
                <Label check>Remember me</Label>
              </FormGroup>
              <Button
                color="primary"
                type="submit"
                className="d-block mx-auto w-100 mt-4"
              >
                Login
              </Button>
            </Form>
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
