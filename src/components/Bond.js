import React from "react";
import Topbar from "./Topbar/topbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Card, Button, Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
// import { Container } from "react-bootstrap";
import "./Bond.css";
import { Container } from "react-bootstrap";
// import "./Step1.css";
import vector from "../assets/images/vector.png"
import icn from "../assets/images/jalebi.png"
import gicon from "../assets/images/greenRect.png"
import daicon from "../assets/images/DAI-logo.png"


function Bonds() {
  console.log("Bonds");
  return (
    <>
      <Topbar />
      <Container>
        <Row className="justify-content-end">
          <Col lg={9}>
            <Form className="mt-5 masform">
              <Card className="form-one mt-4">
                <div className="bond-card">
                  <Row>
                    <Col lg={6}>
                      <div className="vw_bond" >View Bond Sales</div>
                    </Col>
                    <Col lg={6}>
                      <div className="Bond2"><Button color="primary float-right continue-btn">Create Bond</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="warning-div">
                  <div className="warningup-text">
                    <Row>
                      <Col lg={1}><FontAwesomeIcon icon={faExclamationCircle} /></Col>
                      <Col lg={11} className="warning_head">
                        <h1>Warning</h1>
                        <p>
                          The auctions in this list are indexed directly from the blockchain and do not represent an endorsement by the Hug platform or the Hug community. Please note that participating in any of these auctions is a high-risk endeavor and that the value of the tokens that you've received in exchange for contributing to such an auction might go to 0. Hug is not liable for any losses incurred by using our platform.
                        </p>
                      </Col>
                    </Row>
                  </div>

                </div>
                <div className="table-div">
                  <div className="table-head">
                    <Table size="sm">
                      <thead className="boder-wap">
                        <tr>
                          <th>Token</th>
                          <th>Network</th>
                          <th>Status</th>
                          <th>Price</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="bagraund-wap">
                        <tr>
                          <td><img src={icn} alt="icon" className="ic-img2"/>dMC</td>
                          <td className="text-center"><img src={vector} alt="icon" className="ic-img"/></td>
                          <td><img src={gicon} alt="icon" className="ic-img2"/>Ends in 2.2 days</td>
                          <td><img src={daicon} alt="icon" className="ic-img2"/>0.22</td>
                          <td className="buy"><a href="#" className="buy-button">buy</a></td>
                        </tr>
                      </tbody>
                      <tbody className="bagraund-wap">
                        <tr>
                          <td><img src={icn} alt="icon" className="ic-img2"/>dMC</td>
                          <td className="text-center"><img src={vector} alt="icon" className="ic-img"/></td>
                          <td><img src={gicon} alt="icon" className="ic-img2"/>Ends in 4.7 days</td>
                          <td><img src={daicon} alt="icon" className="ic-img2"/>0.27</td>
                          <td className="buy"><a href="#" className="buy-button">buy</a></td>
                        </tr>
                      </tbody>
                      <tbody className="bagraund-wap">
                        <tr>
                          <td><img src={icn} alt="icon" className="ic-img2"/>dMC</td>
                          <td className="text-center"><img src={vector} alt="icon" className="ic-img"/></td>
                          <td><img src={gicon} alt="icon" className="ic-img2"/>Begins in 2.7 days</td>
                          <td><img src={daicon} alt="icon" className="ic-img2"/>0.27</td>
                          <td className="buy"><a href="#" className="buy-button">buy</a></td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                </div>
              </Card>
            </Form>
          </Col>
          <Col lg={3}>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Bonds;

