import React, { useContext } from "react";

import context from "@app/context";
import ListOfContacts from "@app/listOfContacts/listOfContacts.jsx";

import { OverviewStyled, ButtonStyled } from "./overview.styled";

const Overview = () => {
  const { state, dispatch } = useContext(context);

  const clickHandler = () => {
    dispatch({ type: "CHANGE_CATEGORY" });
    dispatch({ type: "SET_SEARCH", payload: [] });
  };

  return (
    <OverviewStyled>
      <ButtonStyled onClick={clickHandler}>
        {state.category === "Show all" ? "Filter favorites" : "Show all"}
      </ButtonStyled>
      {state.searchResult.length ? (
        <ListOfContacts contacts={state.searchResult} />
      ) : state.category === "Show all" ? (
        <ListOfContacts contacts={state.contacts} />
      ) : (
        <ListOfContacts contacts={state.favorites} />
      )}
    </OverviewStyled>
  );
};

export default Overview;
