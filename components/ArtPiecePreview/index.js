import Image from "next/image";
import styled from "styled-components";

const ListItem = styled.li`
  list-style: none;
  border: 0.2rem solid #adb6c4;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  background-color: white;
`;

const Artist = styled.h3`
  margin-top: 0;
`;

export default function ArtPiecePreview({
  image,
  title,
  artist,
  height,
  width,
}) {
  return (
    <ListItem>
      <Image src={image} alt={title} height={height / 10} width={width / 10} />
      <h2>{title}</h2>
      <Artist>{artist}</Artist>
    </ListItem>
  );
}
