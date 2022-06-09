import { Typography } from '@material-ui/core/';
import { Container, Box } from "@material-ui/core";
import Pricing from "./pages/pricing/components/Pricing";

function App () {
  return (
    <Container maxWidth="md">
      <Box mt={5} mb={5}>
        <Typography variant="h1">Pricing Page</Typography>
      </Box>
      <Pricing />
    </Container>
  );
}

export default App;