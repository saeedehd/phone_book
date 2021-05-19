import React, { useContext } from "react";
import { Link } from "react-router-dom";

import context from "@app/context";

import { ContactNameStyled } from "./contact.styled";

const Contact = (props) => {
  const { state, dispatch } = useContext(context);
  const clickHandler = () => {
    dispatch({ type: "SET_CONTACT", payload: props.contact });
  };
  return (
    <Link to="/detail" style={{ width: "100%" }}>
      <ContactNameStyled onClick={clickHandler}>
        {props.contact.name}
      </ContactNameStyled>
    </Link>
  );
};

export default Contact;
