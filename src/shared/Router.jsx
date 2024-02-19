import Home from "pages/Home";
import Detail from "pages/Detail";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import fakeData from "fakeData.json";

export default function Router() {
  const [messages, setMessages] = useState(fakeData);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home messages={messages} setMessages={setMessages} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail messages={messages} setMessages={setMessages} />}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
