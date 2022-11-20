import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

  .profile-picture {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  .banner {
    width: 100%;
    height: 18rem;
    object-fit: cover;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 92.5rem;
    margin: 0 auto;
    padding: 1rem 2rem;
    gap: 1rem;
  }
`;
