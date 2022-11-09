import React from "react";
import ReactDOM from "react-dom";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import sageTheme from "carbon-react/lib/style/themes/sage";
import GlobalStyle from "carbon-react/lib/style/global-style";
import Box from "carbon-react/lib/components/box";
import Button from "carbon-react/lib/components/button";
import "carbon-react/lib/style/fonts.css";

const App = () => {
  return (
    <CarbonProvider theme={sageTheme}>
      <GlobalStyle />
      <Box margin="0 25px">
        <Button>Hello Carbon</Button>
        <p style={{ color: "red" }}>
          Please remember to select the appropriate version of Carbon. <br />
          You might need to change package.json manually if you can't see the
          version in the dropdown.
        </p>
      </Box>
    </CarbonProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
