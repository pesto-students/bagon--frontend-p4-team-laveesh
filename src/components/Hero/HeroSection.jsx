import React from "react";
import styled from "styled-components";
import HeroSectionImage from "../../assets/images/Hero-section-1.webp";
<<<<<<< HEAD

const Container = styled.div`
  width: 100%;
  height: 50vh;
=======
import HeroSectionImage2 from "../../assets/images/Hero-section-2.webp";
import Searchbar from "./Searchbar";

const Container = styled.div`
  width: 100%;
  height: 60vh;
>>>>>>> dev-frontend
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  height: 100%;
<<<<<<< HEAD
=======
  width: 100%;
  flex: 1;
`;

const SearchbarContainer = styled.div`
>>>>>>> dev-frontend
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
<<<<<<< HEAD
=======
  width: 100%;
>>>>>>> dev-frontend
`;

function HeroSection() {
  return (
    <Container>
      <ImgContainer>
        <Image src={HeroSectionImage} />
      </ImgContainer>
<<<<<<< HEAD
=======
      <SearchbarContainer>
        <Searchbar />
      </SearchbarContainer>
      <ImgContainer>
        <Image src={HeroSectionImage2} />
      </ImgContainer>
>>>>>>> dev-frontend
    </Container>
  );
}

export default HeroSection;
