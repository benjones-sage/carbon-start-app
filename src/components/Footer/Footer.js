import "./Footer.scss";

import { GridContainer, GridItem } from "carbon-react/lib/components/grid";

import React from 'react';
import Pod from "carbon-react/lib/components/pod";
import Button from "carbon-react/lib/components/button";

const Footer = ({page, testId, handleSubmit, handleBack, disableContinue = false, hide = false}) => {

    const buttons = `${page}.footer.buttons`;

    //TODO: figure out how to do testIds more elegantly possibly use the translation file?
    return (
        <div>
            <GridContainer p={0} pt={4}>
            <GridItem responsiveSettings={[{
    maxWidth: "2500px",
    gridColumn: "1 / 3",
    gridRow: "1 / 1",
    alignSelf: "stretch",
    justifySelf: "stretch"
  }, {
    maxWidth: "768px",
    gridColumn: "1 / 13",
    gridRow: "1 / 1",
    alignSelf: "stretch",
    justifySelf: "stretch"
  }]}>
          <Button data-testid={`${testId}-btn-back`} buttonType="secondary" ml={0} onClick={() => handleBack()} fullWidth>Back</Button> 
      </GridItem>
      <GridItem responsiveSettings={[{
    maxWidth: "2500px",
    gridColumn: "10 / 13",
    gridRow: "1 / 1",
    alignSelf: "stretch",
    justifySelf: "stretch"
  }, {
    maxWidth: "768px",
    gridColumn: "1 / 13",
    gridRow: "2 / 2",
    alignSelf: "stretch",
    justifySelf: "stretch"
  }]}>
         
        <Button  iconType="link" iconPosition="after"  data-testid={`${testId}-btn-continue`} buttonType="primary" ml={0} onClick={() => handleSubmit()} fullWidth>Continue</Button>
                    
      </GridItem>
               
    </GridContainer>
        </div>
    );
};

export default Footer;
