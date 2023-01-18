import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  width: 100%;
  height: 50px;
<<<<<<< HEAD
  padding: 0.5rem;
=======
>>>>>>> dev-frontend
  background-color: #f1dfdf;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.5rem;
`;

const NavItems = styled.a`
  padding: 10px;
  cursor: pointer;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Logo>BagOn</Logo>
        <Right>
          <NavItems>1800-500-1234</NavItems>
          <NavItems>Travel agent?Join us</NavItems>
          <NavItems>Blog</NavItems>
          <NavItems>Offers</NavItems>
          <NavItems>LOGIN</NavItems>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
