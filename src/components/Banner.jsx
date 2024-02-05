import React from "react";
import styled from "styled-components";
import bannerImg from "assets/banner.jpeg";
import { COLORS } from "common/colors";

function Banner() {
  return (
    <StBanner>
      <div></div>
    </StBanner>
  );
}
export default Banner;

const StBanner = styled.section`
  padding: 0 3rem 2rem;

  div {
    margin: 0 auto;
    height: 50vh;
    border: 6px double ${COLORS.royal};
    background: no-repeat url(${bannerImg});
    background-size: 100% 100%;

    @media screen and (min-width: 768px) {
      background-size: cover;
    }

    @media screen and (min-width: 2000px) {
      height: 30vh;
    }
  }
`;
