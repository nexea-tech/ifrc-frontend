import React from "react";
import { useEffect, useState } from "react";
import "./register.css";
import {
  FormGroup,
  Form,
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
  const credentials = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    department: "",
    country: "",
    password: "",
    confirmpassword: "",
  };
  const [formValues, setFormValues] = useState(credentials);
  const [Error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const checkCredentials = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(Error);
    if (Object.keys(Error).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [Error]);

  const validate = (values) => {
    const errors = {};
    const regex = /@(ifrc)\.[a-zA-Z0-9_.+-]/;

    if (!values.firstname) {
      errors.firstname = "First name is required";
    }

    if (!values.lastname) {
      errors.lastname = "Last name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (values.email && !regex.test(values.email)) {
      errors.email = "Please use ifrc email";
    }

    if (!values.phone) {
      errors.phone = "First name is required";
    }

    if (!values.department) {
      errors.department = "Department is required";
    }

    if (!values.country) {
      errors.country = "Country is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirm password is required";
    }

    if (values.password != values.confirmpassword) {
      errors.auth = "Password and confirm password are not same";
    }

    return errors;
  };


  const errorStyle = {
    fontSize: "11px",
    color: "red",
    marginTop: "11px",
  };

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
          <Form onSubmit={handleSubmit}>
            <CardBody>
              <div className="d-lg-flex justify-content-between gap-4">
                <FormGroup className="w-100">
                  <Label for="firstName" className="fw-bold">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstname"
                    type="text"
                    onChange={checkCredentials}
                  />
                  <span style={errorStyle}>{Error.firstname}</span>
                </FormGroup>
                <FormGroup className="w-100">
                  <Label for="lastName" className="fw-bold">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastname"
                    type="text"
                    onChange={checkCredentials}
                  />
                  <span style={errorStyle}>{Error.lastname}</span>
                </FormGroup>
              </div>

              <div className="d-lg-flex justify-content-between gap-4">
                <FormGroup className="w-100">
                  <Label for="email" className="fw-bold">
                    Email
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={checkCredentials}
                  />
                  <span style={errorStyle}>{Error.email}</span>
                </FormGroup>
                <FormGroup className="w-100">
                  <Label for="phone" className="fw-bold">
                    Phone
                  </Label>

                  <Input
                    id="phone"
                    name="phone"
                    type="number"
                    onChange={checkCredentials}
                  />
                  <span style={errorStyle}>{Error.phone}</span>
                </FormGroup>
              </div>

              <div className="d-lg-flex justify-content-between gap-4">
                <FormGroup className="w-100">
                  <Label for="department" className="fw-bold">
                    Department
                  </Label>

                  <Select
                    id="department"
                    options={departments}
                    onChange={(e) =>
                      setFormValues({ ...formValues, ["department"]: e.value })
                    }
                  />
                  <span style={errorStyle}>{Error.department}</span>
                </FormGroup>
                <FormGroup className="w-100">
                  <Label for="country" className="fw-bold">
                    Country
                  </Label>

                  <Select
                    id="country"
                    options={locations}
                    onChange={(e) =>
                      setFormValues({ ...formValues, ["country"]: e.value })
                    }
                  />
                  <span style={errorStyle}>{Error.country}</span>
                </FormGroup>
              </div>

              <div className="d-lg-flex justify-content-between gap-4">
                <FormGroup className="w-100">
                  <Label for="password" className="fw-bold">
                    Password
                  </Label>

                  <Input
                    id="password"
                    name="password"
                    type="password"
                    onChange={checkCredentials}
                  />
                  <span style={errorStyle}>{Error.password}</span>
                </FormGroup>

                <FormGroup className="w-100">
                  <Label for="confirmPassword" className="fw-bold">
                    Confirm Password
                  </Label>

                  <Input
                    id="confirmPasword"
                    name="confirmpassword"
                    type="password"
                    onChange={checkCredentials}
                  />
                  <span style={errorStyle}>{Error.confirmpassword}</span>
                </FormGroup>
              </div>
              <Button
                color="primary"
                className="d-block mx-auto w-100 mt-4"
                type="submit"
              >
                Submit
              </Button>
            </CardBody>
          </Form>
          <div className="text-center mt-1">
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
        </Card>
      </div>
    </div>
  );
};

export default Register;
