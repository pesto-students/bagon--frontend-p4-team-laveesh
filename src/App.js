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
    </div>
  );
}

export default App;
