import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(url, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  const [pieces, setPieces] = useLocalStorageState("pieces", {
    defaultValue: [],
  });

  useEffect(() => {
    if (data && pieces.length === 0) {
      const initialPieces = data.map((dataItem) => ({
        ...dataItem,
        id: uid(),
        isFavorite: false,
      }));
      setPieces(initialPieces);
    }
  }, [data, pieces.length, setPieces]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (!data) {
    return <p>No data available...</p>;
  }

  function handleToggleFavorite(slug) {
    setPieces(
      pieces.map((piece) =>
        piece.slug === slug
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece
      ),
      setArtPiecesInfo(pieces.filter((piece) => piece.isFavorite))
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={pieces}
          onToggleFavorite={handleToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </Layout>
    </>
  );
}
