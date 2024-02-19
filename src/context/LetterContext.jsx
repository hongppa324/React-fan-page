import { useState, createContext } from "react";
import useLocalStorage from "common/useLocalStorage";

export const LetterContext = createContext();

export const LetterProvider = ({ children }) => {
  const [messages, setMessages] = useLocalStorage("message", []);
  return (
    <LetterContext.Provider value={{ messages, setMessages }}>
      {children}
    </LetterContext.Provider>
  );
};
