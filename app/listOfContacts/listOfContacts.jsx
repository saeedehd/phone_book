import React from "react";

import { ShowContactsStyled } from "./listOfContacts.styled";

import Contact from "@app/listOfContacts/contact/contact.jsx";

const ListOfContacts = (props) => {
  return (
    <ShowContactsStyled>
      {props.contacts.map((contact, index) => {
        return <Contact contact={contact} key={index} />;
      })}
    </ShowContactsStyled>
  );
};

export default ListOfContacts;
