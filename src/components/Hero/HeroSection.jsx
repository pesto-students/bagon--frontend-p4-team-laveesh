import React from "react";
import styled from "styled-components";
import HeroSectionImage from "../../assets/images/Hero-section-1.webp";
import HeroSectionImage2 from "../../assets/images/Hero-section-2.webp";
import Searchbar from "./Searchbar";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`;

const SearchbarContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

function HeroSection() {
  return (
    <Container>
      <ImgContainer>
        <Image src={HeroSectionImage} />
      </ImgContainer>
      <SearchbarContainer>
        <Searchbar />
      </SearchbarContainer>
      <ImgContainer>
        <Image src={HeroSectionImage2} />
      </ImgContainer>
    </Container>
  );
}

export default HeroSection;
