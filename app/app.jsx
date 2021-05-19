import { StrictMode, useEffect, useMemo, useReducer } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import { AppStyled } from "./app.styled";
import { Provider } from "./context";
import reducer from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    console.log(`[STATE]`, { ...state });
  }, [state]);

  return (
    <Provider
      value={useMemo(() => {
        return { state, dispatch };
      }, [state])}
    >
      <AppStyled>
        <div>phone book</div>
      </AppStyled>
    </Provider>
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
