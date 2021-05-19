import styled from "styled-components";
import SearchIcon from "@assets/icons/magnifier.svg";

export const SearchStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  background-color: #3a3d52;
  border-radius: 0.3rem;
  padding: 1.5rem 0;
`;

export const InputStyled = styled.input`
  border-radius: 0.3rem;
  font-size: 1.5rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: #969699;
  text-indent: 1.5rem;
  width: 95%;
`;

export const IconStyled = styled(SearchIcon)`
  height: 2rem;
  color: #969699;
  padding: 0 1.5rem;
`;
