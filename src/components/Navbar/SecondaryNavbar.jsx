import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  width: 100%;
  height: 50px;

  background-color: #f6f6f6;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItems = styled.a`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;

function SecondaryNavbar() {
  return (
    <Container>
      <Wrapper>
        <NavItems>Honeymoon Packages</NavItems>
        <NavItems>Family Packages</NavItems>
        <NavItems>Holiday Packages</NavItems>
        <NavItems>Hot Deals</NavItems>
        <NavItems>Luxuary Holidays</NavItems>
        <NavItems>Hotels</NavItems>
        <NavItems>Destination Guides</NavItems>
        <NavItems style={{ border: "1px solid lightblue" }}>
          PLAN MY HOLIDAY
        </NavItems>
      </Wrapper>
    </Container>
  );
}

export default SecondaryNavbar;
