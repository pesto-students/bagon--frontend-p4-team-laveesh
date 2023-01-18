<<<<<<< HEAD
import FooterSection from "./components/Footer/FooterSection";
import HeroSection from "./components/Hero/HeroSection";
import HowItworks from "./components/How-it-works/HowItworks";
import LoginForm from "./components/Login/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import SecondaryNavbar from "./components/Navbar/SecondaryNavbar";
import SignupForm from "./components/Signup/SignupForm";

function App() {
  return (
    <div>
      <Navbar />
      <SecondaryNavbar />
      {/* <HeroSection />
      <FooterSection />
      <HowItworks />  */}
      {/* <LoginForm /> */}
      {/* <SignupForm /> */}
=======
import DestinationCard from "./components/Destination/DestinationCard.jsx";
import FAQSection from "./components/FAQ/Index.jsx";
import CategoriesCards from "../src/components/DestinationCategory/CategoriesCards.jsx";
import Homepage from "./pages/Home/Homepage.jsx";
function App() {
  return (
    <div>
      {/* <Homepage /> */}
      <DestinationCard />
      <FAQSection />
      <CategoriesCards />
>>>>>>> dev-frontend
    </div>
  );
}

export default App;
