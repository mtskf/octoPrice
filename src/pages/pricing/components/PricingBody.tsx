import { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import PricingConfig from "./PricingConfig";
import Cloud from "./CloudPricing";
import Server from "./ServerPricing";
import Community from "./Community";
import CallToAction from "./CallToAction";

const FREE_TARGETS = 10;
const FREE_MINUTES = 100;

const PricingBody = () => {
  const [valueTargets, setValueTargets] = useState(FREE_TARGETS);
  const [valueMinutes, setValueMinutes] = useState<number>(FREE_MINUTES);
  return (
    <Box style={{ position: 'relative' }} pb={4}>
      <PricingConfig
        valueTargets={valueTargets}
        setValueTargets={setValueTargets}
        valueMinutes={valueMinutes}
        setValueMinutes={setValueMinutes}
      />
      <Box mb={5}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item sm xs={12}>
            <Cloud
              valueTargets={valueTargets}
              valueMinutes={valueMinutes}
            />
          </Grid>
          <Grid item sm xs={12}>
            <Server valueTargets={valueTargets} />
          </Grid>
        </Grid>
      </Box>

      <Community />

      <CallToAction />

    </Box >
  );
};
export default PricingBody;
