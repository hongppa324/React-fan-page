import React from "react";
import { Link } from "react-router-dom";
import { timestampWindow } from "common/date";
import styled from "styled-components";

function LetterCard({ message, nickname, content, createdAt, id }) {
  return (
    <Letter>
      <Link to={`detail/${id}`}>
        <LetterImg>
          <img src={require(`assets/defaultUser.jpg`)} alt="" />
        </LetterImg>
        <LetterInfo>
          <div>
            <span>{nickname}</span>
            <span>{timestampWindow(createdAt)}</span>
          </div>
          <div>
            <p title={content}>
              {content.length > 40 ? `${content.slice(0, 40)}...` : content}
            </p>
          </div>
        </LetterInfo>
      </Link>
    </Letter>
  );
}
export default LetterCard;

const Letter = styled.div`
  margin-bottom: 20px;
  a {
    display: grid;
    grid-template-columns: 10% 90%;
    width: 100%;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

const LetterImg = styled.div`
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: rgba(214, 3, 119, 0.3) 0px 0px 0px 3px;
  }

  @media screen and (max-width: 600px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const LetterInfo = styled.div`
  div:first-child {
    display: flex;
    flex-grow: 0;
    justify-content: space-between;
    margin-bottom: 0.8rem;

    span:first-child {
      font-size: 1.4rem;
    }
  }

  div:last-child {
    display: block;
    background-color: white;
    border-radius: 6px;

    p {
      font-size: 1.2rem;
      line-height: 1.4rem;
      padding: 1rem;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-radius: 6px;
      box-shadow: rgba(214, 3, 200, 0.3) 0px 0px 0px 3px;
    }
  }
`;
