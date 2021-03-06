import { useState, SetStateAction, Dispatch } from "react";
import { Box, Grid } from "@material-ui/core";
import { Help } from '@material-ui/icons';
import { toLocaleStr } from "lib/utils";
import styles from "./styles.module.scss";
import CustomSlider from "./CustomSlider";
import CustomTooltip from "./CustomTooltip";

const FREE_TARGETS = 10;
const FREE_MINUTES = 100;
const FREE_TARGETS_SLIDER_POS = FREE_TARGETS / 1;
const FREE_MINUTES_SLIDER_POS = FREE_MINUTES / 10;

interface PropsType {
  valueTargets: number;
  setValueTargets: Dispatch<SetStateAction<number>>;
  valueMinutes: number;
  setValueMinutes: Dispatch<SetStateAction<number>>;
}

const UserConfig = ({
  valueTargets,
  setValueTargets,
  valueMinutes,
  setValueMinutes
}: PropsType) => {

  const [valueTargetsSliderPos, setValueTargetsSliderPos] = useState(FREE_TARGETS_SLIDER_POS);
  const [valueMinutesSliderPos, setValueMinutesSliderPos] = useState(FREE_MINUTES_SLIDER_POS);

  const valueTargetsScale = (x: number) => {
    if (x <= 80) return x;
    else if (x <= 164) return (x - 80) * 5 + 80;
    else if (x <= 254) return Math.floor((x - 164) / 3) * 50 + 500;
    else if (x <= 346) return Math.floor((x - 254) / 3) * 100 + 2000;
    return 99999;
  };

  const valueMinutesScale = (x: number) => {
    if (x <= 50) return x * 10;
    else if (x <= 80) return (x - 50) * 50 + 500;
    else if (x <= 110) return (x - 80) * 100 + 2000;
    else if (x <= 140) return Math.floor((x - 110) / 3) * 500 + 5000;
    else return 99999;
  };

  const handleTargetsSliderChange = (event: any, newValue: any) => {
    if (newValue < FREE_TARGETS_SLIDER_POS) newValue = FREE_TARGETS_SLIDER_POS;
    setValueTargetsSliderPos(newValue);
    setValueTargets(valueTargetsScale(newValue));
  };

  const handleMinutesSliderChange = (event: any, newValue: any) => {
    if (newValue < FREE_MINUTES_SLIDER_POS) newValue = FREE_MINUTES_SLIDER_POS;
    setValueMinutesSliderPos(newValue);
    setValueMinutes(valueMinutesScale(newValue));
  };

  const targetTooltipContent = (
    <>
      <h4>What are deployment targets?</h4>
      <p>
        Deployment targets are the servers and cloud PaaS resources (typically the number of virtual machines) that you deploy to. <a href='/pricing/faq#cloud-pricing'>Learn more</a>.
      </p>
    </>
  );

  const minuteTooltipContent = (
    <>
      <h4>What are deployment minutes?</h4>
      <p>
        Deployment minutes is the total duration of all deployments during the month.With Cloud option, each deployment minute is charged at $0.03 per minute. <a href='/pricing/faq#cloud-pricing'>Learn more</a>.</p><p>You will only be charged for the targets you use in your cloud instance.
      </p>
    </>
  );


  return (
    <Box className={styles.PricingConfig}>
      <Box mb={3}>
        <Grid container alignItems="center">
          <Grid item xs={12} sm="auto" className={styles.SliderTitle}>
            <CustomTooltip
              title={targetTooltipContent}
              arrow
              placement="top-start"
            >
              <h3>
                <span>Deployment targets</span>
                <Help />
              </h3>
            </CustomTooltip>
          </Grid>
          <Grid item xs>
            <CustomSlider
              value={valueTargetsSliderPos}
              onChange={handleTargetsSliderChange}
              aria-labelledby="non-linear-input-slider"
              min={0}
              step={1}
              max={350}
              // valueLabelDisplay="on"
              // valueLabelFormat={(x: number) => x > 5001 ? 'Unlimited' : toLocaleStr(x)}
              scale={valueTargetsScale}
            />
          </Grid>
          <Grid item>
            <div className={styles.SliderValueLabel}>
              {valueTargets > 5000 ? <small>Unlimited</small> : toLocaleStr(valueTargets)}
              <span>targets</span>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box mb={10}>
        <Grid container alignItems="center">
          <Grid item xs={12} sm="auto" className={styles.SliderTitle}>
            <CustomTooltip title={minuteTooltipContent} arrow placement="top-start">
              <h3>
                <span>Deployment minutes</span>
                <Help />
              </h3>
            </CustomTooltip>
          </Grid>
          <Grid item xs>
            <CustomSlider
              value={valueMinutesSliderPos}
              onChange={handleMinutesSliderChange}
              aria-labelledby="non-linear-input-slider"
              min={0}
              step={1}
              max={143}
              scale={valueMinutesScale}
            />
          </Grid>
          <Grid item>
            <div className={styles.SliderValueLabel}>
              {valueMinutes > 10000 ? <small>Unlimited</small> : toLocaleStr(valueMinutes)}
              <span>mins / month</span>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box >
  );
};
export default UserConfig;
