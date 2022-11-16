import React from "react";
import ReactDOM from "react-dom";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import sageTheme from "carbon-react/lib/style/themes/sage";
import GlobalStyle from "carbon-react/lib/style/global-style";
import Box from "carbon-react/lib/components/box";
import Button from "carbon-react/lib/components/button";
import Textbox from "carbon-react/lib/components/textbox";
import "carbon-react/lib/style/fonts.css";
import ReactDOMServer from "react-dom/server";
import MainFrame from "./components/main-frame";
import Footer from "./components/Footer";
import PageFooter from "./components/page-footer";
import Typography, {
  List,
  ListItem,
} from "carbon-react/lib/components/typography";


import {
  Accordion,
  AccordionGroup,
} from "carbon-react/lib/components/accordion";
const App = () => {
  return (
    <CarbonProvider theme={sageTheme} id= {'CarbonProvider'}>
      <GlobalStyle id= {"GlobalStyle"}/>
          <MainFrame id={"MainFrame"}>

      <Box height="80px" bg="white"> <h1 style={{"marginTop": 0}}>Sage bank feeds terms and conditions</h1></Box>
            <AccordionGroup id={"Accordion-Group"}>
              <Accordion disableContentPadding subTitle="What Sage can do with your data">
                <Box p={2}>
                  <List>
                    <ListItem>
                      Connect to your bank account.
                    </ListItem>
                    <ListItem>
                      Receive transaction information and import it into Sage.
                    </ListItem>
                  </List>
                </Box>
              </Accordion>
              <Accordion disableContentPadding subTitle="What you'll share with Sage">
                <Box p={2}>
                  <List>
                    <ListItem>
                    Transaction information for example, amount, date, type and transaction description
                    </ListItem>
                    <ListItem>
                      Account name
                    </ListItem>
                    <ListItem>
                      Account number
                    </ListItem>
                    <ListItem>
                      Sort code
                    </ListItem>
                  </List>
                </Box>
              </Accordion>
              <Accordion disableContentPadding subTitle="What you'll get from Sage">
                <Box p={2}>
                <List>
                    <ListItem>
                    A real-time overview of your transactions
                    </ListItem>
                    <ListItem>
                    Secure connections to banks to keep your data safe
                    </ListItem>
                    <ListItem>
                      Automatic data entry, saving you time
                    </ListItem>
                  </List>
                </Box>
              </Accordion>
            </AccordionGroup>
            <p>By selecting <b>Continue</b> you are agreeing to Sage retrieving your data for a 90-day period. 
            Read the Sage bank feeds <a href="">terms and conditions</a> for more information.</p>
            <Footer/>
          </MainFrame>
          <PageFooter style = {{"border": "none", borderStyle: "none"}} className = {"no-border"}>

          <p>Having trouble connecting your bank? <a href="">Go to the Help Centre (opens in a new tab)</a></p>
          <Button mt={2} buttonType="tertiary" iconType="refresh" noWrap>
            Restart Connection
          </Button>
      </PageFooter>
    </CarbonProvider>
  );
};

const html = ReactDOMServer.renderToStaticMarkup(<App />);

console.log(html.toString());

ReactDOM.render(<App />, document.getElementById("app"));


/*
<Box margin="0 25px">
        <Button>Hello Carbon</Button>
        <p style={{ color: "red" }}>
          Please remember to select the appropriate version of Carbon. <br />
          You might need to change package.json manually if you can't see the
          version in the dropdown.
        </p>
      </Box> */