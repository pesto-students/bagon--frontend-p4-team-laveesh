import FooterSection from "./components/Footer/FooterSection";
import HeroSection from "./components/Hero/HeroSection";
import HowItworks from "./components/How-it-works/HowItworks";
import Index from "./components/IndiaPoster/Index.jsx";
import InquirySection from "./components/Inquiry/Index.jsx";
import WhyChooseUS from "./components/WhyChooseUs/Index.jsx";
import LoginForm from "./components/Login/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import SecondaryNavbar from "./components/Navbar/SecondaryNavbar";
import SignupForm from "./components/Signup/SignupForm";

function App() {
  return (
    <div>
      <Navbar />
      <SecondaryNavbar />
      <HeroSection />
      <HowItworks />
      <Index />
      <WhyChooseUS />
      <InquirySection />
      <FooterSection />

      {/* <LoginForm />
      <SignupForm /> */}
    </div>
  );
}

export default App;
