import styled from "styled-components";
import closeIcon from "@assets/icons/close.svg";
import StarBorder from "@assets/icons/star_border.svg";
import Star from "@assets/icons/star.svg";

export const DetailContainerStyled = styled.div`
  width: 88%;
  background-color: #b7c0ce;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  border-radius: 0.4rem 0.4rem 0 0;
  height: 80vh;
  padding: 1rem;
`;
export const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;

export const NameStyled = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  align-self: center;
`;

export const ButtonStyled = styled.button`
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  align-self: center;
`;

export const CloseIconStyled = styled(closeIcon)`
  height: 2.5rem;
  color: #3a3d52;
`;
export const StarBorderIconStyled = styled(StarBorder)`
  height: 2.5rem;
  color: #3a3d52;
`;
export const StarIconStyled = styled(Star)`
  height: 2.5rem;
  color: #ffd700;
`;
