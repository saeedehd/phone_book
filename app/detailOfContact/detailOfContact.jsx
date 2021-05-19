import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";

import context from "@app/context";

import {
  DetailContainerStyled,
  RowStyled,
  NameStyled,
  ButtonStyled,
  StarBorderIconStyled,
  StarIconStyled,
  CloseIconStyled,
} from "./detailOfContact.styled";

const DetailOfContact = () => {
  const { state, dispatch } = useContext(context);
  const [favoriteStatus, setFavoriteStatus] = useState(false);
  return (
    <DetailContainerStyled>
      {Object.keys(state.contact).length ? (
        <Fragment>
          <RowStyled>
            <RowStyled>
              <NameStyled>{state.contact.name}</NameStyled>
              {favoriteStatus ||
              state.favorites.find(
                (item) =>
                  JSON.stringify(item) === JSON.stringify(state.contact),
              ) ? (
                <ButtonStyled>
                  <StarIconStyled
                    onClick={() => {
                      let index = state.favorites.findIndex((item) => {
                        JSON.stringify(item) === JSON.stringify(state.contact);
                      });
                      dispatch({
                        type: "DELETE_FAVORITE",
                        payload: index,
                      });
                      setFavoriteStatus(false);
                    }}
                  />
                </ButtonStyled>
              ) : (
                <ButtonStyled>
                  <StarBorderIconStyled
                    onClick={() => {
                      dispatch({
                        type: "SET_FAVORITE",
                        payload: state.contact,
                      });
                      setFavoriteStatus(true);
                    }}
                  />
                </ButtonStyled>
              )}
            </RowStyled>
            <Link to="/contacts">
              <CloseIconStyled />
            </Link>
          </RowStyled>
          <RowStyled>
            <p>{state.contact.email}</p>
          </RowStyled>
        </Fragment>
      ) : null}
    </DetailContainerStyled>
  );
};

export default DetailOfContact;
