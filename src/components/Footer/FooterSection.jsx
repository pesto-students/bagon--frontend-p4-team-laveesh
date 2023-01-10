import React from "react";
import styled from "styled-components";
import GoogleIcon from "../../assets/images/SocialButtonGoogle.png";
import TwitterIcon from "../../assets/images/SocialButtonTwitter.png";
import FacebookIcon from "../../assets/images/SocialButtonFacebook.png";
import AppleIcon from "../../assets/images/SocialButtonApple.png";
import FooterImage from "../../assets/images/FooterImage.webp";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  /* padding: 3rem; */
  background-color: #e4d9d9;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  mix-blend-mode: multiply;
`;

const Description = styled.div`
  width: 500px;

  p {
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  padding: 3rem;

  ul {
    list-style-type: none;
    margin: 2rem;
  }

  li {
    padding: 0.5rem;
  }
`;

const listItem = {
  fontWeight: "bold",
};

const Features = styled.div``;

function FooterSection() {
  return (
    <Container>
      <Wrapper>
        <Description>
          <p>Who we are?</p>
          <p>
            Obsessed with the idea of empowering the travelers with best
            vacation deals, We are an online marketplace that connects a
            traveler to multiple local travel agents. With the help of these
            650+ local travel experts TravelTriangle has been able to cater to
            the needs of over 10 Lac travelers on domestic India tours.
          </p>
        </Description>
        <FeaturesContainer>
          <Features>
            <ul>
              <li style={listItem}>Mobile app</li>
              <li>Features</li>
              <li>Live Share</li>
              <li>video record</li>
            </ul>
          </Features>

          <Features>
            <ul>
              <li style={listItem}>Community</li>
              <li>lorem ipsum</li>
              <li>Make my trip</li>
              <li>Live events</li>
            </ul>
          </Features>

          <Features>
            <ul>
              <li style={listItem}>About us</li>
              <li>Contact us</li>
              <li>Gallaery</li>
              <li>lorem ipsum</li>
            </ul>
          </Features>
        </FeaturesContainer>
      </Wrapper>
      <FooterImg>
        <Image src={FooterImage} />
      </FooterImg>
    </Container>
  );
}

export default FooterSection;
