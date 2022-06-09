// import * as React from "react";
import { useState, useMemo } from "react";
import { Box, Grid } from "@material-ui/core";
// import { makeStyles, } from "@material-ui/core/styles";
// import { toLocaleStr, handleInvalidValue } from "../../../utils";
// import styles from  "./styles.module.scss";
import UserInput from "./UserInput";
import Cloud from "./CloudPricing";
import Server from "./ServerPricing";

const FREE_TARGETS = 10;
const FREE_MINUTES = 100;

const Pricing = () => {
  const [valueTargets, setValueTargets] = useState(FREE_TARGETS);
  const [valueMinutes, setValueMinutes] = useState<number>(FREE_MINUTES);
  const highAvailability = useMemo(() => valueTargets > 99, [valueTargets]);
  return (
    <>
      <h2>TEST</h2>
      <p>{valueTargets}, {valueMinutes}, {highAvailability ? 'High availability' : ''}</p>
      <UserInput
        valueTargets={valueTargets}
        setValueTargets={setValueTargets}
        valueMinutes={valueMinutes}
        setValueMinutes={setValueMinutes}
      />
      <Box mb={10}>
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
    </>
  );
};
export default Pricing;
