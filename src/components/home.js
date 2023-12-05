import React from "react";
import Topbar from "./Topbar/topbar";
import { Button, Container } from "react-bootstrap";
// import MasterForm from ".";
function Home() {
  console.log("hey");
  return (
    <>
      <Container>
        {" "}
        <Topbar />
        <div className="wallet-btn-div">
          
          <Button variant="outlined" className="connct-wallet-btn">
            CONNECT WALLET
          </Button>
        </div>
        {/* <MasterForm/> */}
      </Container>
    </>
  );
}

export default Home;
