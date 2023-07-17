import React from "react";
import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import "./confirm.css";

export const RegisterConfirmation = () => {
  return (
    <div className="forget-password">
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
            Confirmation
          </CardTitle>
          <hr className="w-25 mx-auto" />
          <CardBody>
            <div className="confirm ">
              <img
                className="confirm"
                src="/images/confirm.svg"
                alt="confirm"
              />
            </div>
            <div className="text">
              <p>Your email has been verified!</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
