import React from "react";
import styled from "styled-components";
import { ColorModeContext } from "./ColorMode";
import { CiDark, CiLight } from "react-icons/ci";

const StyledThemeToggler = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel3};
  border: 0;
  padding: 3px;
  font-size: 0.75rem;
  width: 3.125rem;
  height: 1.625rem;
  display: flex;
  justify-content: space-around;
  border-radius: 10000px;
  position: relative;

  label {
    width: 3.125rem;
    display: flex;
    justify-content: space-between;
  }

  span {
    display: inline-flex;
    width: 1.25rem;
    height: 1.25rem;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: #fafafa;
    }
  }

  label:before {
    content: "";
    background-color: ${({ theme }) => theme.backgroundLevel1};
    border: 1px solid ${({ theme }) => theme.backgroundLevel3};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: 0.3s;
    cursor: pointer;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked + label:before {
    transform: translateX(100%);
  }
`;

export default function ThemeToggler() {
  const context = React.useContext(ColorModeContext);

  return (
    <StyledThemeToggler>
      <input
        id="dark-mode"
        type="checkbox"
        onChange={() => {
          context.toggleMode();
        }}
      />
      <label htmlFor="dark-mode" className="dark-mode-switch">
        <span>
          <CiDark />
        </span>
        <span>
          <CiLight />
        </span>
      </label>
    </StyledThemeToggler>
  );
}
