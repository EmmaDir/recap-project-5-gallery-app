import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";
import { uid } from "uid";
// import useLocalStorageState from "use-local-storage-state";
// import { useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(url, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  // const [pieces, setPieces] = useLocalStorageState("pieces", {
  //   defaultValue: [],
  // });
  // const [pieces, setPieces] = useState([]);

  // useEffect(() => {
  //   if (data && pieces.length === 0) {
  //     const initialPieces = data.map((dataItem) => ({
  //       ...dataItem,
  //       id: uid(),
  //       isFavorite: false,
  //     }));
  //     setPieces(initialPieces);
  //   }
  // }, [data, pieces.length, setPieces]);

  // useEffect(() => {
  //   setArtPiecesInfo(pieces.filter((piece) => piece.isFavorite));
  // }, [pieces]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  function handleSubmitComment(slug) {
    const currentDate = new Date().toLocaleDateString("de-DE");

    function getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    }
    const currentTime = getCurrentTime();
    setArtPiecesInfo(
      pieces.map((piece) =>
        piece.slug === slug
          ? {
              ...piece,
              comments: [
                { comments: comments, date: currentDate, time: currentTime },
              ],
            }
          : piece
      )
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
          randomPiece={randomPiece}
          comments={artPiecesInfo.comments}
        />
      </Layout>
    </>
  );
}
