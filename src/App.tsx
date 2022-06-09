// import React from "react";
import { ThemeProvider, Typography } from '@material-ui/core/';
import "./App.scss";
import { Container, Box } from "@material-ui/core";
import theme from 'lib/theme';

import Pricing from "./pages/pricing/components/Pricing";
import Cloud from "./pages/pricing/components/CloudPricingOld";
import Server from "./pages/pricing/components/ServerPricingOld";

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box mt={5} mb={5}>
          <Typography variant="h1">Pricing Page</Typography>
        </Box>
        <Pricing />
        <Cloud />
        <Server />
      </Container>
    </ThemeProvider>
  );
}

export default App;