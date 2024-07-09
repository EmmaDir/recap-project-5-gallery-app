import Image from "next/image";
import styled from "styled-components";

const RandomArt = styled.div`
  border: 0.2rem solid #ffc49b;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-left: 2.45rem;
  background-color: white;
`;

export default function Spotlight({ image, artist, height, width }) {
  return (
    <RandomArt>
      <Image
        src={image}
        alt="Image of spotlight art piece"
        height={height / 10}
        width={width / 10}
      />
      <h3>{artist}</h3>
    </RandomArt>
  );
}
