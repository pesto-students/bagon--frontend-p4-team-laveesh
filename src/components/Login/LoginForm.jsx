import React from "react";
import styled from "styled-components";
import Input from "../Signup/Input";
import LoginImage from "../../assets/images/Log-In-Page.webp";
import Login from "../../assets/images/Login.webp";
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

  h3 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
    cursor: pointer;
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

function LoginForm() {
  return (
    <Container>
      <Wrapper>
        <Form>
          <h3>LOG IN</h3>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>LOG IN</Button>
          <SocialContainer>
            <Button variant="" startIcon={<FacebookOutlinedIcon />}>
              Continue With Facebook
            </Button>
            <Button variant="" startIcon={<GoogleIcon />}>
              Continue With Google
            </Button>
            <Button variant="" startIcon={<TwitterIcon />}>
              Continue With Twitter
            </Button>
            <p>Forget password ?</p>
            <p>Dont have an account ?</p>
            <p>Sign Up</p>
          </SocialContainer>
        </Form>
        <ImageContainer>
          <Image src={Login} />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
}

export default LoginForm;
