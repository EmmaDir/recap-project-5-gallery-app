import ArtPieceDetails from "@/components/ArtPieceDetails";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-size: 4rem;
  position: fixed;
  left: 2rem;
`;

const Background = styled.div`
  height: 100vw;
`;

export default function DetailsPage({ pieces }) {
  return (
    <Background>
      <StyledLink href="/art-pieces">←</StyledLink>
      <ArtPieceDetails pieces={pieces}></ArtPieceDetails>
    </Background>
  );
}
