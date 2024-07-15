import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <>
            <ArtPiecePreview
              key={piece.slug}
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              height={piece.dimensions.height}
              width={piece.dimensions.width}
              slug={piece.slug}
              isFavorite={
                artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
                  ?.isFavorite
              }
              onToggleFavorite={() => onToggleFavorite(piece.slug)}
            />
          </>
        );
      })}
    </ul>
  );
}
