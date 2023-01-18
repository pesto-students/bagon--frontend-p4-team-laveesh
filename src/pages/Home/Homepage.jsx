import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import SecondaryNavbar from "../../components/Navbar/SecondaryNavbar.jsx";
import HeroSection from "../../components/Hero/HeroSection.jsx";
import HowItWork from "../../components/How-it-works/HowItworks.jsx";
import IndiaPoster from "../../components/IndiaPoster/Index.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/Index.jsx";
import InquirySection from "../../components/Inquiry/Index.jsx";
import Footer from "../../components/Footer/FooterSection.jsx";

function Homepage() {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <HeroSection />
      <HowItWork />
      <IndiaPoster />
      <WhyChooseUs />
      <InquirySection />
      <Footer />
    </>
  );
}

export default Homepage;
