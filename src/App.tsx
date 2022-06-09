// import React from "react";
import { ThemeProvider, Typography } from '@material-ui/core/';
import "./App.scss";
import { Container, Box } from "@material-ui/core";
import theme from 'lib/theme';

import Pricing from "./pages/pricing/components/Pricing";

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box mt={5} mb={5}>
          <Typography variant="h1">Pricing Page</Typography>
        </Box>
        <Pricing />
      </Container>
    </ThemeProvider>
  );
}

export default App;