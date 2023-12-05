import React from "react";
import { Label,} from "reactstrap";
import "./Step1.css"; 

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
    <div className="my-card">
      <p><h4 className="text-start pl-1">Bonded Token Information</h4><br/>
      Enter the ERC-20 token contract address and a URL of the logo for the auctioned token.
      

</p>

      
        <Label for="bonded_token">Bonded Token</Label>
        <input type="text"  label="Bonded Token" className="mb-3 w-100 form-box form-control" placeholder="0xEC213F83defB583af3A000B1c0ada660b1902A0F"/>

        <Label for="bonded_token">Project Image URL</Label>

        <input type="text"  label="Project Image URL" className="mb-3 w-100 form-box form-control" placeholder="https://presearch.io/static/media/Presearch_Logo.3dacaada.jpg"/>
        <p>Make sure url ends in “.jpeg”, “.jpg” or “.png”
</p>

        
     </div> 
    </>
  );
};

export default Step1;
