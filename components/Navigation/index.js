import Link from "next/link";
import styled from "styled-components";

const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: #294c60;
  display: flex;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const ListItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
`;

export default function Navigation() {
  return (
    <Navbar>
      <StyledList>
        <ListItem>
          <StyledLink href="/">Spotlight</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href="/art-pieces">Pieces</StyledLink>
        </ListItem>
      </StyledList>
    </Navbar>
  );
}
