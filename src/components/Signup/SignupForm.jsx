import React from "react";
import styled from "styled-components";
import SignupImage from "../../assets/images/Sign-up-form.webp";
import SignUpImage from "../../assets/images/Sign-up-form.webp";
import Input from "./Input";
import Button from "@mui/material/Button";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f4f4f4;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 90%;
  margin: 50px;
`;

const Form = styled.form`
  width: 40%;
  margin: 50px;
  p {
    margin-bottom: 2rem;
  }

  button {
    width: 50%;
    height: 40px;
    border: none;
    margin-bottom: 2rem;
    background-color: #9f6666;
    border-radius: 0.5rem;
  }
`;

const SocialContainer = styled.div`
  width: 120%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function SignupForm() {
  return (
    <Container>
      <Wrapper>
        <Form>
          <h3>SIGN UP</h3>
          <p>
            Become a member -- you'll enjoy exclusive <br /> deals, offers
            invites and rewards
          </p>
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <button>SIGN UP</button>
          <SocialContainer>
            <Button variant="" startIcon={<FacebookOutlinedIcon />}>
              Sign up with Facebook
            </Button>
            <Button variant="" startIcon={<GoogleIcon />}>
              Sign up with Google
            </Button>
            <Button variant="" startIcon={<TwitterIcon />}>
              Sign up with Twitter
            </Button>
          </SocialContainer>
        </Form>
        <ImageContainer>
          <Image src={SignUpImage} />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
}

export default SignupForm;
