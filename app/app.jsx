import { StrictMode, useEffect, useMemo, useReducer } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import { AppStyled } from "./app.styled";

const App = () => {
  return (
    <AppStyled>
      <div>phone book</div>
    </AppStyled>
  );
};

render(
  <StrictMode>
    <BrowserRouter>
      <StyleSheetManager disableCSSOMInjection={true}>
        <App />
      </StyleSheetManager>
    </BrowserRouter>
  </StrictMode>,
  document.querySelector("#application"),
);
