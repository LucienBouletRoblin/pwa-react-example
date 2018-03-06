import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "typeface-roboto";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { blue } from "material-ui/colors";
import store from "./store";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[500],
      main: blue[700],
      dark: blue[900]
    },
    secondary: {
      light: blue[500],
      main: blue[700],
      dark: blue[900]
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
