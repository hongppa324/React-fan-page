import { useState, createContext } from "react";
import { MEMBERS } from "common/member";
import useLocalStorage from "common/useLocalStorage";

export const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [memberId, setMemberId] = useState(MEMBERS[0].englishName);
  const [messages, setMessages] = useLocalStorage("message", []);
  const updateHandler = (member) => setMemberId(member);
  const addHandler = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <MemberContext.Provider
      value={{
        memberId,
        setMemberId,
        messages,
        setMessages,
        MEMBERS,
        updateHandler,
        addHandler,
      }}
    >
      {children}
    </MemberContext.Provider>
  );
};
