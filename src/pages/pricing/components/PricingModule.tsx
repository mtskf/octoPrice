import { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import PricingConfig from "./PricingConfig";
import Cloud from "./CloudPricing";
import Server from "./ServerPricing";
import Community from "./Community";

const FREE_TARGETS = 10;
const FREE_MINUTES = 100;

const PricingModule = () => {
  const [valueTargets, setValueTargets] = useState(FREE_TARGETS);
  const [valueMinutes, setValueMinutes] = useState<number>(FREE_MINUTES);
  return (
    <Box style={{ position: 'relative' }}>
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

    </Box >
  );
};
export default PricingModule;
