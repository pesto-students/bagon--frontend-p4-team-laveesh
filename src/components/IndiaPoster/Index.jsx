import React from "react";
import styled from "styled-components";
import IndiaImage from "../../assets/images/IndiaPoster.webp";

const Container = styled.div`
  width: 100%;
  height: 70vh;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
`;

function Index() {
  return (
    <Container>
      <Image src={IndiaImage} />
    </Container>
  );
}

export default Index;
