import { Box, Grid } from "@material-ui/core";
import styles from "./styles.module.scss";
import { ChevronRight } from '@material-ui/icons';
import { ReactComponent as PeopleImg } from "assets/img/people.svg";

const Community = () => {
  return (
    <Box mb={10} className={styles.PricingCommunity}>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item sm={"auto"} xs={12}>
          <PeopleImg className="img" />
        </Grid>
        <Grid item xs>
          <p>Using Octopus for open source or personal projects? Our Community edition offers the full deployment power of Octopus Server or Cloud with some limitations.</p>
          {/* eslint-disable-next-line */}
          <a href="#">Learn more<ChevronRight /></a>
        </Grid>
      </Grid>
    </Box>

  );
};
export default Community;
