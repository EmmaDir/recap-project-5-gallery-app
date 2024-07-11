import styled from "styled-components";

const HeartFilled = styled.svg`
  /* position: absolute;
 right: 0.5rem; */
  /* top: 0.5rem; */
  fill: red;
`;

const Heart = styled.svg`
  /* position: absolute;
  right: 0.5rem; */
  /* top: 0.5rem; */
  fill: none;
`;

const Button = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  border: none;
  background: none;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <>
      <Button onClick={() => onToggleFavorite(slug)}>
        {isFavorite ? (
          <HeartFilled
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={50}
            style={{ stroke: "#294c60", strokeWidth: 1 }}
          >
            <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
          </HeartFilled>
        ) : (
          <Heart
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={50}
            style={{ stroke: "#294c60", strokeWidth: 1 }}
          >
            <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
          </Heart>
        )}
      </Button>
      {/* <Heart
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={50}
        style={{ stroke: "#294c60", strokeWidth: 1 }}
        // fill={isFavorite === true ? "red" : "none"}
        onClick={() => onToggleFavorite(id)}
      >
        <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
      </Heart> */}
    </>
  );
}
