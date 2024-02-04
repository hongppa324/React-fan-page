import React from "react";
import { COLORS } from "common/colors";
import styled from "styled-components";

function MemberList({ children: name, id, clicked, onUpdate }) {
  const selectMember = () => onUpdate(id);

  return (
    <StMemberList onClick={selectMember} $clicked={clicked}>
      <div>
        <img src={require(`assets/${name}.jpg`)} alt={name} />
        <p>{name}</p>
      </div>
    </StMemberList>
  );
}
export default MemberList;

const StMemberList = styled.div`
  padding: 1rem;
  background-color: ${(props) => (props.$clicked ? COLORS.mauve : "white")};
  box-shadow: rgba(93, 10, 100, 0.2) 0px 7px 29px 0px;
  transition: all 0.1s ease-in-out;
  border: 5px double ${COLORS.royal};
  cursor: pointer;

  div > img {
    width: 150px;
    height: 220px;
  }

  div > p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    text-align: center;
    font-weight: bold;
    color: ${(props) => (props.$clicked ? "white" : COLORS.royal)};
  }

  &:nth-child(even) {
    rotate: 2deg;
  }
  &:nth-child(odd) {
    rotate: -1deg;
  }

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 1150px) {
    background-color: ${(props) => (props.$clicked ? COLORS.lilac : "white")};
    padding: 0.2rem;

    div > p {
      background: none;
      font-size: 1.1rem;
    }

    &:nth-child(odd) {
      rotate: 0deg;
    }
    &:nth-child(even) {
      rotate: 0deg;
    }
  }
`;
