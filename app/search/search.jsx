import React, { useContext } from "react";
import Fuse from "fuse.js";

import context from "@app/context";

import { SearchStyled, InputStyled, IconStyled } from "./search.styled";

const Search = () => {
  const { state, dispatch } = useContext(context);
  let findedItems = [];

  const searchHandler = (event) => {
    let result = [];
    const options = {
      keys: ["name"],
    };
    const fuse = new Fuse(state.contacts, options);
    // Change the pattern
    const pattern = event.target.value;
    result = fuse.search(pattern);
    result.map((i) => {
      findedItems.push(i.item);
    });
    dispatch({ type: "SET_SEARCH", payload: findedItems });
  };
  return (
    <SearchStyled>
      <InputStyled placeholder="Search" onChange={searchHandler} />
      <IconStyled />
    </SearchStyled>
  );
};

export default Search;
