import styled from "styled-components";

export const StyledBanner = styled.div`
  background-image: url(${({ banner }) => banner});
  width: 100%;
  height: 18rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
