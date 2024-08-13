import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
const steps = [
  "placed",
  "order Confirmed",
  "Shipped",
  "Out For Delivery",
  "delivererd",
];
const OrderTracking = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracking;
