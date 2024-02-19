import React, { useContext } from "react";
import { MEMBERS } from "common/member";
import LetterCard from "components/LetterCard";
import { COLORS } from "common/colors";
import styled from "styled-components";
import { LettersContext } from "context/FanPageContext";

function Letter() {
  const { memberId, messages } = useContext(LettersContext);
  const memberData = MEMBERS.filter(
    (member) => member.englishName === memberId
  )[0];
  const filteredData = messages?.filter(
    (message) => message.writedTo === memberData.englishName
  );

  return (
    <StLetter>
      <h3>To. {memberData.englishName}</h3>
      {!!filteredData[0] || (
        <EmptyLetter>
          <strong>
            {memberData.englishName}에게 첫 번째 메시지를 남기는 주인공이
            되어주세요!
          </strong>
        </EmptyLetter>
      )}
      {filteredData?.map((item) => {
        const { nickname, content, writedTo, createdAt, id } = item;
        return (
          <LetterCard
            nickname={nickname}
            content={content}
            writedTo={writedTo}
            createdAt={createdAt}
            id={id}
            key={id}
          />
        );
      })}
    </StLetter>
  );
}
export default Letter;

const StLetter = styled.section`
  padding: 3rem;

  h3 {
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
    rotate: -3deg;
  }
`;

const EmptyLetter = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 6px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2rem;
`;
