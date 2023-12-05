import React from "react";
import { 
  // FormGroup, Label, Input,
   Button } from "reactstrap";
import emot from "../assets/images/emot.png"

const Step5 = props => {
  if (props.currentStep !==5) {
    return null;
  }

  return (
    <>
      <img src={emot} alt="Happy Emoticons" className="emot-img"/>
      <Button color="primary step5-btn">Share launch on twitter</Button>
    </>
  );
};

export default Step5;
