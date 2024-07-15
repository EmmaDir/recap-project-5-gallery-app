import ArtPieceDetails from "@/components/ArtPieceDetails";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

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

export default function DetailsPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedPiece = pieces.find((piece) => piece.slug === slug);

  return (
    <Background>
      <StyledLink href="/art-pieces">←</StyledLink>
      <ArtPieceDetails
        selectedPiece={selectedPiece}
        onToggleFavorite={() => onToggleFavorite(selectedPiece.slug)}
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === selectedPiece.slug)
            ?.isFavorite
        }
      ></ArtPieceDetails>
    </Background>
  );
}
