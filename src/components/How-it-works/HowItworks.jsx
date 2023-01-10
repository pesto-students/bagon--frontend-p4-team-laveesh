import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40vh;
  /* padding: 4rem; */
  background-color: #f5f2f2;
`;

const Right = styled.div`
  padding: 3rem;
  h3 {
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    color: #fb0303;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

const Package = styled.div`
  h2 {
    font-weight: normal;
  }
  padding: 2rem;
`;

const Quotes = styled.div`
  h2 {
    font-weight: normal;
  }

  padding: 2rem;
`;

const Book = styled.div`
  h2 {
    font-weight: normal;
  }

  padding: 2rem;
`;

function HowItworks() {
  return (
    <Container>
      <Right>
        <h3>How it Works</h3>
        <p>Customize & book</p>
        <h1>
          Amazing
          <br /> Holiday packages
        </h1>
        <p>in 3 simple steps</p>
      </Right>
      <Left>
        <Package>
          <h2>
            Select your
            <br /> Package
          </h2>
          <p>& tell us your preferences</p>
        </Package>
        <Quotes>
          <h2>
            Get multiple
            <br /> free quotes
          </h2>
          <p>From multiple travel experts</p>
        </Quotes>
        <Book>
          <h2>
            Customize & <br />
            Book
          </h2>
          <p> a perfect holiday experience</p>
        </Book>
      </Left>
    </Container>
  );
}

export default HowItworks;
