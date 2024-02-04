import React from "react";
import Header from "components/Header";
import Banner from "components/Banner";
import MemberTemplate from "components/MemberTemplate";
import Footer from "components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <MemberTemplate />
      <Footer />
    </div>
  );
}
