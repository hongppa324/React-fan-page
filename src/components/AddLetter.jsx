import React, { useContext, useState } from "react";
import defaultImg from "assets/defaultUser.jpg";
import { MemberContext } from "context/MemberContext";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import { COLORS } from "common/colors";

function AddLetter() {
  const { memberId, addHandler, MEMBERS } = useContext(MemberContext);
  const member = MEMBERS.filter((member) => memberId === member.englishName)[0];

  const [message, setMessage] = useState({
    nickname: "",
    content: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();

    if (!message.nickname.trim()) {
      alert("Nickname을 입력해주세요.");
      return;
    }

    if (!message.content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    addHandler(message);
    setMessage({ nickname: "", content: "" });
  };

  const changeHandler = (event) => {
    setMessage((prev) => ({
      id: uuid(),
      createdAt: Date.now(),
      writedTo: memberId,
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <StAddLetter>
      <form onSubmit={submitHandler}>
        <div>
          <img src={defaultImg} alt="" />
          <span>To. {member.englishName}</span>
        </div>
        <NicknameInput
          type="text"
          name="nickname"
          maxLength="20"
          placeholder="닉네임을 입력해주세요. (20자 제한)"
          value={message.nickname}
          onChange={changeHandler}
        />
        <textarea
          rows="3"
          name="content"
          maxLength="100"
          placeholder="메시지를 입력해주세요 (100자 제한)"
          value={message.content}
          onChange={changeHandler}
        />
        <button>Send</button>
      </form>
    </StAddLetter>
  );
}
export default AddLetter;

const StAddLetter = styled.section`
  padding: 0 3rem 3rem;

  form {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    padding: 1rem;

    & > div {
      display: flex;
      align-items: center;
      img {
        margin-right: 6px;
        width: 40px;
        height: 40px;
        border: 1px solid #333;
        border-radius: 50%;
      }
      span {
        font-weight: bold;
      }
    }
    textarea {
      padding: 1rem;
      border: 1px dashed #000;
      resize: none;
      margin-bottom: 5px;
      border-radius: 5px;
    }
    button {
      padding: 0.4rem 0;
      background-color: ${COLORS.mauve};
      font-weight: bold;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

const NicknameInput = styled.input`
  padding: 0.3rem 0;
  font-size: 1rem;
  line-height: 2rem;
  text-decoration: underline;
  color: ${(props) => (props.$isOver ? "red" : "inherit")};
`;
