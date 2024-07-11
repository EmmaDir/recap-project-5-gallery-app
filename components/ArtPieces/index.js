import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <>
            <ArtPiecePreview
              onToggleFavorite={onToggleFavorite}
              key={piece.slug}
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              height={piece.dimensions.height}
              width={piece.dimensions.width}
              slug={piece.slug}
              isFavorite={piece.isFavorite}
            />
          </>
        );
      })}
    </ul>
  );
}
