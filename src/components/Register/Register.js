import React from "react";
import { useEffect, useState } from "react";
import "./register.css";
import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import Select from "react-select";
import axios from "axios";
import { Link } from "react-router-dom";

const departments = [
  { value: "Finance", label: "Finance" },
  { value: "Investment", label: "Investment" },
  { value: "IT", label: "IT" },
];

const locations = [
  { value: "Malaysis", label: "Malaysia" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Bangladesh", label: "Bangladesh" },
];

const Register = () => {
  return (
    <div className="register">
      <h4>
        <img src="/images/ifrc.svg" alt="ifrc-logo" className="ifrc-logo" />
        <strong className="mx-2">IFRC Desk Booking</strong>
      </h4>
      <div className="box p-3">
        <Card className="mx-auto p-4" style={{ maxWidth: "40rem" }}>
          <CardTitle tag="h5" className="fw-bold mb-1">
            Register
          </CardTitle>
          <hr className="w-25 mx-auto" />
          <CardBody>
            <div className="d-lg-flex justify-content-between gap-4">
              <FormGroup className="w-100">
                <Label for="firstName" className="fw-bold">
                  First name
                </Label>
                <Input id="firstName" name="firstname" type="text" />
              </FormGroup>
              <FormGroup className="w-100">
                <Label for="lastName" className="fw-bold">
                  Last name
                </Label>
                <Input id="lastName" name="lastname" type="text" />
              </FormGroup>
            </div>

            <div className="d-lg-flex justify-content-between gap-4">
              <FormGroup className="w-100">
                <Label for="firstName" className="fw-bold">
                  Email
                </Label>
                <Input id="firstName" name="firstname" type="text" />
              </FormGroup>
              <FormGroup className="w-100">
                <Label for="lastName" className="fw-bold">
                  Password
                </Label>
                <Input id="lastName" name="lastname" type="text" />
              </FormGroup>
            </div>

            <div className="d-lg-flex justify-content-between gap-4">
              <FormGroup className="w-100">
                <Label for="department" className="fw-bold">
                  Department
                </Label>
                <Select id="department" options={departments} />
              </FormGroup>
              <FormGroup className="w-100">
                <Label for="country" className="fw-bold">
                  Country
                </Label>
                <Select id="country" options={locations} />
              </FormGroup>
            </div>

            <div className="d-lg-flex justify-content-between gap-4">
              <FormGroup className="w-100">
                <Label for="phone" className="fw-bold">
                  Phone
                </Label>
                <Input id="phone" name="phone" type="number" />
              </FormGroup>
            </div>

            <div className="d-lg-flex justify-content-between gap-4">
              <FormGroup className="w-100">
                <Label for="password" className="fw-bold">
                  Password
                </Label>
                <Input id="password" name="password" type="password" />
              </FormGroup>
              <FormGroup className="w-100">
                <Label for="confirmPassword" className="fw-bold">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPasword"
                  name="confirmpassword"
                  type="password"
                />
              </FormGroup>
            </div>
            <Button color="primary" className="d-block mx-auto w-100 mt-4">
              Submit
            </Button>
            <div className="text-center mt-4">
              <span className="d-inline">Already have an account ? </span>
              <Link
                to="/login"
                style={{ textDecoration: "none" }}
                className="text-center"
              >
                <h6 className="mt-4 d-inline" style={{ color: "black" }}>
                  Login
                </h6>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Register;
