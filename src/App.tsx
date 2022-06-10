import { Typography } from '@material-ui/core/';
import { Container, Box } from "@material-ui/core";
import NavBar from "./pages/general/components/NavBar";
import PricingModule from "./pages/pricing/components/PricingModule";
import Footer from "./pages/general/components/Footer";

function App () {
  return (
    <>
      <NavBar />
      <Container maxWidth="md">
        <Box mt={5} mb={5}>
          <Typography variant="h1">Pricing Page</Typography>
        </Box>
        <PricingModule />
      </Container>
      <Footer />
    </>
  );
}

export default App;