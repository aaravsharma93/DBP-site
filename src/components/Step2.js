import React from "react";
import { Label, Input, Row} from "reactstrap";
import { Form } from "react-bootstrap";
import './Step1.css';

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }
  
  

  return (
  
    <>
      <div className="my-card">
        <p><h4 className="text-start pl-1">Auction information</h4><br />
          Set your initial discount rate the given.


        </p>


        <Label for="raise_amt">Amount to Raise</Label>
        <Input type="text" className="mb-3 w-100 form-box form-control" placeholder="Amount to raise denominated in DAI" />

        <Label for="collateral">Collateral</Label>
        <p>minimum of 25% collateral, though the more collateralized, the more attractive the offering.</p>
        <Input type="text" className="mb-3 w-100 form-box form-control" placeholder="e.g. 30%" />

        <Label for="collateral_currency">Duration of Sale</Label>
        {/* <div className="row">
          <Input type="date" className="mb-3 w-100 form-box form-control" placeholder="01/01/2022 | 12:30 " className="col-6"/>
          <Input type="date" className="mb-3 w-100 form-box form-control" placeholder="01/03/2022 | 14:30 " className="col-6"/>
        </div> */}
        <div className="row">
          <Input type="datetime" className="col-5 float-right form-box form-control" placeholder="01/01/2022 | 12:30 " />
          <Input type="datetime" className="col-5 float-left form-box form-control" placeholder="01/03/2022 | 14:30 " />
        </div>

        <Label for="collateral_currency">Collateral Currency</Label>
        <Input type="text" className="mb-3 w-100 form-box form-control" placeholder="Click to pick currency" />

        <Label for="discount">Starting discount to Zero Coupon bond</Label>
        <Input type="text" className="mb-3 w-100 form-box form-control" placeholder="10%" />

        <Label for="maturity">Maturity Date</Label>

        <div className="rado_btn">
          <Row>

          <form class="boxed">
          <input type="radio" id="1yrs" name="skills" value="1yr" />
            <label for="1yrs">1yr</label>

            <input type="radio" id="2yrs" name="skills" value="2yr"/>
            <label for="2yrs">2yr</label>
            
            <input type="radio" id="3yrs" name="skills" value="3yr"/>
            <label for="3yrs">3yr</label>
            
            <input type="radio" id="5yrs" name="skills" value="5yr"/>
            <label for="5yrs">5yr</label>

            <input type="radio" id="10yrs" name="skills" value="10yr"/>
            <label for="10yrs">10yr</label>

              </form>

          </Row>
        </div>


      </div>

    </>
  );
};

export default Step2;
