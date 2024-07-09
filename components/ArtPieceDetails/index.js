import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.section`
  border: 0.2rem solid #ffc49b;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-left: 2.45rem;
  background-color: white;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
`;

const Artist = styled.h3`
  margin-top: 0;
`;

const Detail = styled.p`
  font-size: 1.5 rem;
  margin-top: 0;
`;

const Background = styled.div`
  height: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ArtPieceDetails({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  let selectedPiece = pieces.find((piece) => piece.slug === slug);

  return (
    <Background>
      <Headline>DETAILS</Headline>
      <Container>
        <Image
          src={selectedPiece.imageSource}
          alt="Image of selected art piece"
          height={selectedPiece.dimensions.height / 10}
          width={selectedPiece.dimensions.width / 10}
        />
        <h2>{selectedPiece.name}</h2>
        <Artist>{selectedPiece.artist}</Artist>
        <Detail>
          <i>
            <strong>Year:</strong>
          </i>{" "}
          {selectedPiece.year}
        </Detail>
        <Detail>
          <i>
            <strong>Genre:</strong>
          </i>{" "}
          {selectedPiece.genre}
        </Detail>
      </Container>
    </Background>
  );
}
