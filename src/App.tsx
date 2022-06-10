import { Container } from "@material-ui/core";
import NavBar from "./pages/general/components/NavBar";
import Hero from "./pages/pricing/components/PricingHero";
import PricingBody from "./pages/pricing/components/PricingBody";
import Footer from "./pages/general/components/Footer";

function App () {
  return (
    <>
      <NavBar />
      <Hero />
      <Container maxWidth="md">
        <PricingBody />
      </Container>
      <Footer />
    </>
  );
}

export default App;