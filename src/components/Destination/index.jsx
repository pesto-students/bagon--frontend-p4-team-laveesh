import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar.jsx";
import SecondaryNavbar from "../Navbar/SecondaryNavbar.jsx";
import HimalayaImage from "../../assets/images/himalaya.webp";
import { Button } from "@mui/material";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1dfdf;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  h3 {
    color: #ffffff;
    font-size: 80px;
    font-family: "Inter";
    font-style: normal;
    position: absolute;
    width: 1156px;
    left: 430px;
    top: 400px;
  }

  p {
    color: #ffffff;
    font-size: 30px;
    font-family: "Inter";
    font-style: normal;
    position: absolute;
    width: 1156px;
    left: 600px;
    top: 500px;
  }

  button {
    border: none;
    position: absolute;
    width: 200px;
    left: 800px;
    top: 600px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
`;

function index() {
  return (
    <Container>
      <Navbar />
      <SecondaryNavbar />
      <ImageContainer>
        <Image src={HimalayaImage} />
        <h3>Himalayas Tour Packages</h3>
        <p>A Destination for All Seasons and All Reasons</p>
        <Button variant="contained">View All Packags</Button>
      </ImageContainer>
    </Container>
  );
}

export default index;

/* Himalayas Tour Packages */

// position: absolute;
// width: 1156px;
// height: 116px;
// left: 430px;
// top: 536px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 600;
// font-size: 96px;
// line-height: 116px;
// letter-spacing: -0.015em;

// color: #FFFFFF;

/* A Destination for All Seasons and All Reasons */
