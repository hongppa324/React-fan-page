import React from "react";
import { timestampWindow } from "common/date";
import styled from "styled-components";

function DetailLetterItem({
  editHandler,
  deleteHandler,
  changeContentHandler,
  nickname,
  content,
  createdAt,
  writedTo,
  isEdit,
  editContent,
  id,
}) {
  return (
    <DetailContainer>
      <DetailHeader>
        <h2>IU Universe</h2>
        <span>No. {id.slice(0, 8)}</span>
      </DetailHeader>
      <DetailInfo>
        <DetailImg>
          <img src={require(`assets/${writedTo}.jpg`)} alt="" />
        </DetailImg>
        <DetailCard>
          <div>
            <h3>닉네임</h3>
            <p>{nickname}</p>
          </div>
          <div>
            <h3>작성일</h3>
            <p>{timestampWindow(createdAt)}</p>
          </div>
          <div>
            <h3>내용</h3>
          </div>
          <div>
            {isEdit ? (
              <textarea
                cols="30"
                rows="6"
                maxLength="100"
                value={editContent}
                onChange={changeContentHandler}
              />
            ) : (
              <p>{content}</p>
            )}
          </div>
        </DetailCard>
      </DetailInfo>
      <DetailBtnBox>
        <DetailBtn onClick={editHandler} type={isEdit ? "edit" : "default"}>
          {isEdit ? "완료" : "수정"}
        </DetailBtn>
        {!isEdit ? (
          <DetailBtn onClick={deleteHandler} type="delete">
            삭제
          </DetailBtn>
        ) : undefined}
      </DetailBtnBox>
    </DetailContainer>
  );
}
export default DetailLetterItem;

const TYPE = {
  edit: "#04AA6D",
  delete: "#f44336",
  default: "#3498db",
};

const DetailContainer = styled.div`
  position: relative;
  padding: 2rem;
  border: 1px solid #000;
  border-radius: 10px;
  overflow: hidden;

  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: "";
    background-color: #fff;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`;

const DetailHeader = styled.header`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: bold;

  h2 {
    font-size: 2rem;
  }
`;

const DetailInfo = styled.div`
  display: flex;
  width: 60vw;
`;

const DetailImg = styled.div`
  img {
    border: 1px solid #000;
    width: 150px;
    height: 220px;
  }
`;

const DetailCard = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 2;

  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted #000;
    line-height: 2rem;
  }

  div:last-child {
    flex-grow: 2;
    max-width: 60vw;
    p {
      width: 100%;
      word-break: break-all;
    }
    textarea {
      padding: 1rem 0.1rem;
      width: 100%;
      font-size: 1.2rem;
      line-height: 1.4rem;
      resize: none;
      word-break: break-all;
    }
  }
`;

const DetailBtnBox = styled.div`
  text-align: end;
`;

const DetailBtn = styled.button`
  width: 60px;
  height: 30px;
  background-color: ${(props) => TYPE[props.type]};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
`;
