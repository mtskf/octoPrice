import { Box, Grid, Typography, Button } from "@material-ui/core";

const Community = () => {
  return (
    <Box mb={10} textAlign="center">
      <Box mb={4}>
        <Typography variant="h1">Ready to get started?</Typography>
      </Box>
      <Box mb={4}>
        {/* eslint-disable-next-line */}
        <p>Start a free 30 day trial of Octopus Server or Octopus Cloud. Our <a href="#"><b>getting started guides</b></a> will walk you through everything required to deploy your first application. Or contact us to discuss your goals and how Octopus Deploy might help.</p>
      </Box>
      <Grid container spacing={1} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="secondary" size="large">Start 30 days trial</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" size="large">Contact sales</Button>
        </Grid>
      </Grid>
    </Box>

  );
};
export default Community;
