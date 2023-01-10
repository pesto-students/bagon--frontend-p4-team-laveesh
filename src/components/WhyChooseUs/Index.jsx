import React from "react";
import styled from "styled-components";
import agent from "../../assets/svg/agent.svg";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #d9d9d9;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 4rem;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  p {
    color: #7a0707;
  }

  h3 {
    font-size: 2rem;
  }
`;

const Left = styled.div`
  h3 {
    margin-bottom: 2rem;
  }
`;

const Right = styled.div`
  h3 {
    margin-bottom: 2rem;
  }
`;

const Image = styled.img``;

const Component = styled.div``;

const ComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Index() {
  return (
    <Container>
      <Heading>
        <h3>Why Choose us?</h3>
        <p>Let us help you plan your perfect Holiday</p>
      </Heading>
      <Wrapper>
        <Left>
          <h3>Fastest Growing Holiday Marketplace</h3>
          <ComponentWrapper>
            <Component>
              <Image src={agent} />
              <p>
                1200+ <br />
                verified agents
              </p>
            </Component>
            <Component>
              <Image src={agent} />
              <p>
                1200+ <br />
                verified agents
              </p>
            </Component>
            <Component>
              <Image src={agent} />
              <p>
                1200+ <br />
                verified agents
              </p>
            </Component>
          </ComponentWrapper>
        </Left>
        <Right>
          <h3>Easy, Secure & Reliable</h3>
          <ComponentWrapper>
            <Component>
              <Image src={agent} />
              <p>
                1200+ <br />
                verified agents
              </p>
            </Component>
            <Component>
              <Image src={agent} />
              <p>
                1200+ <br />
                verified agents
              </p>
            </Component>
            <Component>
              <Image src={agent} />
              <p>
                1200+ <br />
                verified agents
              </p>
            </Component>
          </ComponentWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Index;
