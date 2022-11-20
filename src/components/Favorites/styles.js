import styled from "styled-components";

export const StyledFavories = styled.div`
  max-width: 92.5rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  overflow: hidden;

  .favorites-title {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  .favorites-list {
    display: flex;
    gap: 2rem;
  }

  .favorite-profile-picture {
    width: 6.25rem;
    height: 6.25rem;
    margin-bottom: 0.5rem;
    border-radius: 50%;
  }

  .favorite {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .favorite-tag {
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1rem;
    color: ${({ theme }) => theme.textColorBase || "#222222"};
  }
`;
