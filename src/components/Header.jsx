import React from "react";
import { NavLink } from "react-router-dom";
import { COLORS } from "common/colors";
import styled from "styled-components";

function Header() {
  return (
    <StHeader>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              home
            </NavLink>
          </li>
        </ul>
        <h1>IU Metaverse</h1>
        <ul></ul>
      </nav>
    </StHeader>
  );
}
export default Header;

const StHeader = styled.header`
  width: 100%;
  background-color: inherit;
  color: white;

  nav {
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      flex: 1 1 0;
      gap: 2rem;

      li {
        text-transform: uppercase;

        a.active {
          color: ${COLORS.royal};
          text-shadow: 1px 1px 2px ${COLORS.mauve};
        }
      }
    }
    ul:last-child {
      justify-content: flex-end;
    }

    h1 {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      color: ${COLORS.royal};
    }
  }
`;
