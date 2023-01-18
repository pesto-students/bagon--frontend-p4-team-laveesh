import React from "react";
import styled from "styled-components";
import AdminImage from "../../assets/images/Hero-section-bg.webp";
import Input from "../Signup/Input";
import Button from "@mui/material/Button";
import { Label } from "@mui/icons-material";
import { ButtonUnstyled } from "@mui/base";

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

const Form = styled.form`
  width: 100%;
  margin: 200px;
  h1,
  p {
    margin-left: 0.5rem;
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

function AdminForm2() {
  return (
    <Container>
      <Wrapper>
        <Form>
          <h1>Admin Form</h1>
          <p>Add New Place</p>
          <Input placeholder="Place Name" />
          <Input placeholder="Description" />

          <Input placeholder="Season" />
          <Input type="file" id="img" name="img" accept="image/*" />
          <button>Submit</button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default AdminForm2;
