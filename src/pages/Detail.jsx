import React from "react";
import Header from "components/layout/Header";
import DetailLetter from "components/DetailLetter";
import useLocalStorage from "common/useLocalStorage";
import { useParams } from "react-router-dom";
import { DetailsContext } from "context/FanPageContext";

export default function Detail() {
  const { id } = useParams();
  const [messages, setMessages] = useLocalStorage("message", []);

  return (
    <>
      <Header />
      <DetailsContext.Provider value={{ id, messages, setMessages }}>
        <DetailLetter />;
      </DetailsContext.Provider>
    </>
  );
}
