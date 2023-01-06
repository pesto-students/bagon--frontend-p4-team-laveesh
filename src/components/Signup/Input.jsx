import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 2rem;
  border: none;
  box-shadow: 0px 14px 9px -15px rgba(245, 39, 39, 0.09);
  border-radius: 0.5rem;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

const Container = styled.div``;

function Input({ type, placeholder }) {
  return (
    <Container>
      <StyledInput
        type={type}
        placeholder={placeholder}
        required
        autoComplete="off"
      />
    </Container>
  );
}

export default Input;
