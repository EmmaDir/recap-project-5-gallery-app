import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
`;

export default function ArtPiecesPage({ pieces }) {
  return (
    <Container>
      <Headline>ART GALLERY</Headline>
      <ArtPieces pieces={pieces}></ArtPieces>
    </Container>
  );
}
