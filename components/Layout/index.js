import Navigation from "../Navigation";
import styled from "styled-components";

const Container = styled.main`
  background-color: #ffefd3;
  padding-bottom: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({ children }) {
  return (
    <>
      <Container>{children}</Container>
      <Navigation />
    </>
  );
}
