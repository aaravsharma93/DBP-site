import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step4 = props => {
  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <>
    <div className="my-card my-card2">
      <p><h4 className="text-start pl-1">Sign Transactions</h4><br/>
    Now that your bond configuration is ready to go, you need to deploy it to the network by signing the following transactions
</p>

      
        <Label for="approve_interatcions">Approve interatcions</Label>
        <Button variant="primary" className="continue-btn">Approve</Button>{' '}
      
        <Label for="tokens">Mint xx of (bTokenName) tokens</Label>
        <Button variant="primary" className="continue-btn">Mint</Button>{' '}
      
        <Label for="deposit_collateral">Deposit Collateral</Label>
        <Button variant="primary" className="continue-btn">Deposit</Button>{' '}

        <Label for="schedule_sale">Schedule sale</Label>
        <Button variant="primary" className="continue-btn">Schedule</Button>{' '}

     </div> 
    </>
  );
};

export default Step4;
