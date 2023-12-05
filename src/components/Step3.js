import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
    <div className="my-card">
      <p><h4 className="text-start pl-1">Project Details</h4><br/>
      Give people buying your debt confidence that you can repay it. FIll out all details

      

</p>

      
        <Label for="launch_dsc">Description of launch</Label>
        <input type="text"  className="mb-3 w-100 form-box form-control" placeholder="Explain why you’re raising debt, what this will fund"/>
      
        <Label for="revenues">Revenues</Label>
        <input type="text"  className="mb-3 w-100 form-box form-control" placeholder="Link to website displaying revenues or on chain data"/>
      
        <Label for="display_link">Learn more link</Label>
        <input type="text"  className="mb-3 w-100 form-box form-control" placeholder="Link to get more information about your project"/>

      
     </div> 
    </>
  );
};

export default Step3;
