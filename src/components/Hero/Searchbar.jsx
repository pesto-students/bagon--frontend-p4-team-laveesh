import React from "react";
import styled from "styled-components";
<<<<<<< HEAD

import React from "react";

const Container = styled.div``;
=======
import HeroBackground from "../../assets/images/Hero-section-bg.webp";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  /* background-image: url(${HeroBackground}); */
  background-color: #f2f2f2;
  background-size: cover;
  background-blend-mode: lighten;
  backdrop-filter: cover;
  h3 {
    font-size: 2rem;
    margin-bottom: 25px;
  }
`;
>>>>>>> dev-frontend

function Searchbar() {
  return (
    <Container>
<<<<<<< HEAD
      <h3> Customizing And Book Amazing Holiday Packages</h3>
=======
      <h3>
        Customizing And Book <br />
        Amazing Holiday Packages
      </h3>
>>>>>>> dev-frontend
      <p>650+ Travel Agents serving 65+ Destinations worldwide</p>
    </Container>
  );
}

export default Searchbar;
