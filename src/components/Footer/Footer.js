import "./Footer.scss";

import { GridContainer, GridItem } from "carbon-react/lib/components/grid";

import React from 'react';

import Button from "carbon-react/lib/components/button";

const Footer = ({page, testId, handleSubmit, handleBack, disableContinue = false, hide = false}) => {

    const buttons = `${page}.footer.buttons`;

    //TODO: figure out how to do testIds more elegantly possibly use the translation file?
    return (
        <div>
            <GridContainer p={0} pt={4}>
                <GridItem alignSelf="stretch" justifySelf="left" gridColumn ="1/7">
                    { hide ? <Button className={"hidden-back-button"} data-testid={`${testId}-btn-back`} buttonType="secondary" ml={0} onClick={() => handleBack()}>
                        Back
                    </Button> : <Button data-testid={`${testId}-btn-back`} buttonType="secondary" ml={0} onClick={() => handleBack()}>
                        Back
                    </Button> }
                </GridItem>
                <GridItem alignSelf="stretch" justifySelf="right" gridColumn ="7/13">
                    {!disableContinue ? (
                    <Button data-testid={`${testId}-btn-continue`} buttonType="primary" ml={2} onClick={() => handleSubmit()}>
                        Continue
                    </Button>
                    ) : (<div />)}
                </GridItem>
            </GridContainer>
        </div>
    );
};

export default Footer;
