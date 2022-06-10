import { Container } from "@material-ui/core";
import NavBar from "./pages/general/components/NavBar";
import Hero from "./pages/pricing/components/PricingHero";
import PricingModule from "./pages/pricing/components/PricingModule";
import Footer from "./pages/general/components/Footer";

function App () {
  return (
    <>
      <NavBar />
      <Hero />
      <Container maxWidth="md">
        <PricingModule />
      </Container>
      <Footer />
    </>
  );
}

export default App;