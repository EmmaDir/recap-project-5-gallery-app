import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import useSWR from "swr";
import { uid } from "uid";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const url = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (!pieces) {
    return <p>Keine Daten vorhanden</p>;
  }

  function randomIndex() {
    return Math.floor(Math.random() * pieces.length);
  }

  const randomPiece = pieces[randomIndex()];

  return (
    <>
      <Spotlight
        key={uid()}
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        height={randomPiece.dimensions.height}
        width={randomPiece.dimensions.width}
      />
      <ArtPieces pieces={pieces}></ArtPieces>
    </>
  );
}
