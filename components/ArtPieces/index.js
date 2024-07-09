import ArtPiecePreview from "../ArtPiecePreview";
import { uid } from "uid";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <>
            <ArtPiecePreview
              key={uid()}
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              height={piece.dimensions.height}
              width={piece.dimensions.width}
              slug={piece.slug}
            />
          </>
        );
      })}
    </ul>
  );
}
