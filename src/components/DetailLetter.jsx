import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailLetterItem from "components/DetailLetterItem";
import styled from "styled-components";
import { DetailsContext } from "context/FanPageContext";

function DetailLetter() {
  const { id, messages, setMessages } = useContext(DetailsContext);
  const { nickname, content, createdAt, writedTo } = messages?.filter(
    (message) => message.id === id
  )[0];
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const navigate = useNavigate();

  const editHandler = () => {
    if (!isEdit) {
      setIsEdit((prev) => !prev);
      return;
    }

    if (content === editContent) {
      window.alert("수정 사항이 없습니다.");
      setIsEdit((prev) => !prev);
      return;
    }

    if (window.confirm("수정하시겠습니까?")) {
      setMessages((messages) => {
        const target = messages.filter((message) => message.id === id)[0];
        const copy = messages.filter((message) => message.id !== id);
        target.content = editContent;
        setIsEdit((prev) => !prev);

        return [...copy, target];
      });
    }
  };

  const deleteHandler = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      setMessages((messages) =>
        messages.filter((message) => message.id !== id)
      );
      navigate("/");
    }
  };

  const changeContentHandler = (event) => {
    if (event.target.value.length > 100) {
      alert("100자 이상을 초과하셨습니다");
      return;
    }
    setEditContent(event.target.value);
  };

  return (
    <StDetail>
      <DetailLetterItem
        editHandler={editHandler}
        deleteHandler={deleteHandler}
        changeContentHandler={changeContentHandler}
        nickname={nickname}
        content={content}
        createdAt={createdAt}
        writedTo={writedTo}
        isEdit={isEdit}
        editContent={editContent}
        id={id}
      />
    </StDetail>
  );
}
export default DetailLetter;

const StDetail = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
