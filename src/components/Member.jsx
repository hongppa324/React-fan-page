import React from "react";
import MemberList from "components/MemberList";
import { MEMBERS } from "common/member";
import styled from "styled-components";
import { COLORS } from "common/colors";

function Member({ memberId, onUpdate }) {
  return (
    <StSection>
      <h2>MEMBER</h2>
      <ul>
        {MEMBERS.map((member) => (
          <MemberList
            key={member.id}
            id={member.englishName}
            clicked={member.englishName === memberId}
            onUpdate={onUpdate}
          >
            {member.englishName}
          </MemberList>
        ))}
      </ul>
    </StSection>
  );
}
export default Member;

const StSection = styled.section`
  padding: 0 3rem 2rem;
  width: 100%;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
    padding: 1rem;
    display: inline-block;
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2rem;
    border-radius: 10px;
    color: ${COLORS.royal};
    background: repeating-linear-gradient(
      -45deg,
      ${COLORS.light},
      ${COLORS.lilac} 3px,
      ${COLORS.mauve} 3px,
      ${COLORS.pastel} 7px
    );
    box-shadow:
      ${COLORS.light} 5px 5px,
      ${COLORS.pastel} 10px 10px,
      ${COLORS.lavender} 15px 15px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
`;
