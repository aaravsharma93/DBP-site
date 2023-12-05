
import React from 'react';
import Quantity from './Topbar/QuantityComponent';
import { Card, Button, Table, Row, Col } from 'react-bootstrap';
import "./addLiquidity.css";
import vector from "../assets/images/vector.png"

function AddLiquidity() {
    console.log('somthing');
    return (
        <div>
            <Card className='liquidity-card'>
                <div>
                    <h1 className='text-liq'>Add Liquidity</h1>
                </div>


                <Row>
                    <Col lg={3}>
                        <div><h4 className="inp-amt">Amount</h4></div>
                        <div><input type="text" className="liq-inpt" placeholder='0.0' /></div>





                    </Col>

                    <Col lg={3}>
                        <div className="liq-btn">
                            <p className="ETH"><img src={vector} alt="icon" className="dai-img"/>ETH</p>
                        </div>
                    </Col>

                    <Col lg={3}>
                        <div className="liq-btn">
                            <p className="bMC">bMC</p>
                        </div>
                    </Col>

                    <Col lg={3}>
                        <div><h4 className="inp-amt">Amount</h4></div>

                        <div><input type="text" className="liq-inpt" placeholder='0.0' /></div>
                    </Col>

                </Row>
                {/* <------- use code-----> */}
<Quantity/>

                <div className="Swap"> 
                <Button variant="outlined" className="liq-btn">Confirm </Button>
                </div>


            </Card>
        </div>
    );
}
export default AddLiquidity;