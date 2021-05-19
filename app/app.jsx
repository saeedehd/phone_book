import { StrictMode, useEffect, useMemo, useReducer } from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { StyleSheetManager } from "styled-components";

import { Provider } from "./context.jsx";
import reducer from "./reducer";
import Search from "@app/search/search.jsx";
import Overview from "@app/overview/overview.jsx";
import DetailOfContact from "@app/detailOfContact/detailOfContact.jsx";

import { AppStyled, HeaderStyled, ContainerStyled } from "./app.styled";

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    contacts: [],
    searchResult: [],
    category: "Show all",
    contact: {},
  });

  const fetchContacts = async () => {
    const response = await fetch("/resource/contacts.json");
    const data = await response.json();
    dispatch({ type: "INITIAL_CONTACTS", payload: data });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    console.log(`[STATE]`, { ...state });
  }, [state]);

  const searching = (result) => {
    console.log(result);
  };

  return (
    <Provider
      value={useMemo(() => {
        return { state, dispatch };
      }, [state])}
    >
      <AppStyled>
        <ContainerStyled>
          <HeaderStyled>Contacts</HeaderStyled>
          <Search />
          <Switch>
            <Redirect exact from="/" to="/contacts" />
            <Route path="/contacts">
              <Overview />
            </Route>
            <Route path="/detail">
              <DetailOfContact />
            </Route>
          </Switch>
        </ContainerStyled>
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
