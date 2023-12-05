import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import gicon from "../assets/images/greenRect.png"


import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

// import styled from "styled-components";
import MultiStepProgressBar from "./MultiStepProgressBar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topbar from "./Topbar/topbar";
// import emot from "../assets/images/emot.png"
class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      // password: ""
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // Trigger an alert on form submission
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { email, username, password } = this.state;
  //   this._next();
  //   alert(`Your registration detail: \n 
  //     Email: ${email} \n 
  //     Username: ${username} \n
  //     Password: ${password}`);
  // };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button color="secondary float-left continue-btn" onClick={this._prev}>
          Previous
        </Button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 5) {
      return (
        <Button color="primary float-right continue-btn" onClick={this._next}>
          Continue
        </Button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 3) {
      return <Button color="primary float-right continue-btn" onClick={this._next}>Submit</Button>;
    }
    // ...else render nothing
    return null;
  }

  render() {
    return (
      <> 
      <Topbar />
        <Row className="justify-content-end">
          <Col lg={9}>
          <Form onSubmit={this.handleSubmit} className="mt-5 masform">
          <MultiStepProgressBar currentStep={this.state.currentStep} />
          {
            this.state.currentStep < 5 ? 
            <Card className="form-one mt-4">
              {/* <CardHeader>Create an Account</CardHeader> */}
              <CardBody>
                <CardTitle>
                </CardTitle>
                <CardText />
                <Step1
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.email}
                />
                <Step2
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.username}
                />
                <Step3
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  // email={this.state.password}
                />
                <Step4
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  // email={this.state.password}
                />
                {/* <Step5
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  // email={this.state.password}
                /> */}
                {
                  this.state.currentStep < 4 ?
                  <>
                  {this.nextButton} </>
                  :
                    // this.state.currentStep == 4 ? 
                    <>{this.submitButton}</>
                    //  : ''
                  //  <Step5/>
                }
                  
              </CardBody>

              {/* <CardFooter>
                {this.previousButton}
                {this.nextButton}
                {this.submitButton}
              </CardFooter> */}
            </Card>
            : <Card className="form-one mt-4 step5-card">
            <Step5
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  // email={this.state.password}
                />
                </Card>
          }

          
        
          </Form>  
          </Col>
          <Col lg={3}>
          { this.state.currentStep < 2 ? 
          
            <Card className="validate-box-1">
            <div className="card-div-1"><div><img src={gicon} alt="icon" className="tk-img"/>Token info validated</div></div>
              <div className="card-div-1">
              <div>Token name: Presearch</div>
              <div>Token ticker: PRE</div>
              <div>Total supply: 500,000,000</div>
              <div>Balance: 30929.8566...</div>
              </div>
            </Card>
          
    : ""}
    </Col>
        </Row>
      </>
    );
  }
}

export default MasterForm;
