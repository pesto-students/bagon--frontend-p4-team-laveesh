import React from "react";
import styled from "styled-components";
import HeroSectionImage from "../../assets/images/Hero-section-1.webp";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

function HeroSection() {
  return (
    <Container>
      <ImgContainer>
        <Image src={HeroSectionImage} />
      </ImgContainer>
    </Container>
  );
}

export default HeroSection;
