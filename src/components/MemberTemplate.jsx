import React, { useState } from "react";
import Member from "components/Member";
import Letter from "components/Letter";
import { MEMBERS } from "common/member";
import AddLetter from "components/AddLetter";
import useLocalStorage from "common/useLocalStorage";
import { LettersContext } from "context/FanPageContext";

function MemberTemplate() {
  const [memberId, setMemberId] = useState(MEMBERS[0].englishName);
  const [messages, setMessages] = useLocalStorage("message", []);

  const updateHandler = (member) => setMemberId(member);
  const addHandler = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <>
      <LettersContext.Provider
        value={{ memberId, messages, updateHandler, addHandler }}
      >
        <Member />
        <Letter />
        <AddLetter />
      </LettersContext.Provider>
    </>
  );
}

export default MemberTemplate;
