import Spotlight from "@/components/Spotlight";
import { uid } from "uid";
import styled from "styled-components";

const Conatiner = styled.section`
  height: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
`;

export default function SpotlightPage({ pieces }) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <Conatiner>
      <Headline>SPOTLIGHT</Headline>
      <Spotlight
        key={uid()}
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        height={randomPiece.dimensions.height}
        width={randomPiece.dimensions.width}
      />
    </Conatiner>
  );
}
