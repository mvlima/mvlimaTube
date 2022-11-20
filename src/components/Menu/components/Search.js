import React from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 26.5rem;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;

  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }

  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 600px) {
      width: 4rem;
      height: 2.5rem;
    }

    svg {
      fill: ${({ theme }) => theme.textColorBase};
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;

export default function Search({ searchValue, setSearchValue }) {
  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
      />
      <button>
        <CiSearch />
      </button>
    </StyledSearch>
  );
}
