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
              <Accordion subTitle="What Sage can do with your data">
                <Box p={2}>
                  <Textbox label="Textbox in an Accordion" />
                </Box>
              </Accordion>
              <Accordion subTitle="What you'll share with Sage">
                <Box p={2}>
                  <Textbox label="Textbox in an Accordion" />
                </Box>
              </Accordion>
              <Accordion subTitle="What you'll get from Sage">
                <Box p={2}>
                  <div>Content</div>
                  <div>Content</div>
                  <div>Content</div>
                </Box>
              </Accordion>
            </AccordionGroup>
            <p>By selecting <b>Continue</b> you are agreeing to Sage retrieving your data for a 90-day period. 
            Read the Sage bank feeds <a href="">terms and conditions</a> for more information.</p>
            <Footer/>
          </MainFrame>
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