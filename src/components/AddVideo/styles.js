import styled from "styled-components";

export const StyledAddVideo = styled.div`
  .add-video {
    width: 3rem;
    height: 3rem;
    font-size: 1.25rem;
    color: inherit;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    border: 0;
    background-color: red;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }

  .close-modal {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  button[type="submit"] {
    background-color: red;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.125rem;
    cursor: pointer;
    color: inherit;
  }

  form {
    width: 100%;
    padding: 5%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      flex: 1;
      border-radius: 0.5rem;
      max-width: 20rem;
      background-color: ${({ theme }) => theme.backgroundLevel2};
      display: flex;
      flex-direction: column;
      position: relative;
      height: fit-content;
      padding: 2.5rem 1rem 1.5rem;
    }
  }

  input {
    border-radius: 0.125rem;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 0.5rem 0.625rem;
    margin-bottom: 1rem;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
`;
