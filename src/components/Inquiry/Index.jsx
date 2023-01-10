import React from "react";
import styled from "styled-components";
import InquirySectionImage from "../../assets/images/InquirySectionImage.webp";
import InquirySectionFormImage from "../../assets/images/InquirySectionFormImage.webp";
import { Button } from "@mui/material";
import { fontWeight } from "@mui/system";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #f2ebeb;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    /* Our Experts would love to create package just for you! */

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    letter-spacing: -0.015em;
    color: #c06868;
  }

  p {
    /* Fill the form and get a call back from our holiday expert */

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    margin-top: 10px;
    line-height: 24px;
    letter-spacing: -0.015em;

    color: #000000;
  }
`;

const RightSide = styled.div`
  width: 30%;
  height: 60vh;
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-weight: 600;
  }
`;

const Image = styled.img`
  width: 500px;
  height: 400px;
  mix-blend-mode: darken;
`;

const FormImage = styled.img`
  width: 200px;
  width: 200px;
  mix-blend-mode: darken;
  margin-bottom: 30px;
`;

const StyledInput = styled.input`
  width: 80%;
  height: 40px;
  margin-bottom: 2rem;
  border: 1px solid #c06868;
  box-shadow: 0px 14px 9px -15px rgba(245, 39, 39, 0.09);
  border-radius: 0.5rem;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 30%;
    height: 40px;
    border: none;
    font-weight: bold;
    margin-top: 1rem;
    background-color: #d9d9d9;
    border-radius: 0.5rem;
  }
`;

const customizeButtom = {
  width: "80%",
  height: "40px",
  backgroundColor: " #d9d9d9",
  borderRadius: "0.5rem",
  marginTop: "1rem",
  fontWeight: "bold",
  border: "none",
};

function Index() {
  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <Image src={InquirySectionImage} />
          <h3>
            Our Experts would love to <br />
            create package just for you!
          </h3>
          <p>Fill the form and get a call back from our holiday expert</p>
        </LeftSide>
        <RightSide>
          <FormImage src={InquirySectionFormImage} />
          <StyledInput
            type="text"
            placeholder="To"
            required
            autoComplete="off"
          />
          <StyledInput
            type="text"
            placeholder="From"
            required
            autoComplete="off"
          />
          <p>Departure Date</p>
          <ButtonContainer>
            <button>Fixed</button>
            <button>Flexible</button>
            <button>Anytime</button>
          </ButtonContainer>
          <button style={customizeButtom}>GET EXPERTS CALLBACK</button>
        </RightSide>
      </Wrapper>
    </Container>
  );
}

export default Index;
