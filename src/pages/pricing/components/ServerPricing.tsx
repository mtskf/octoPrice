import { useMemo } from "react";
import { Box, Typography, Button, Tooltip } from "@material-ui/core";
import { Check, Close, Help, ChevronRight } from '@material-ui/icons';
import styles from "./styles.module.scss";
import { toLocaleStr } from "lib/utils";

interface PropsType {
  valueTargets: number;
}

const FREE_TARGETS = 10;
const COST_PER_TARGET = 10;
const HIGH_AVAILABILITY_TARGETS = 100;
const UNLIMITED_TARGETS = 2001;
const UNLIMITED_PRICE = 192000;

const ServerPricing = ({ valueTargets }: PropsType) => {

  const isEligibleHA = useMemo(() => valueTargets >= HIGH_AVAILABILITY_TARGETS, [valueTargets]);

  const isEligibleUnlimited = valueTargets >= UNLIMITED_TARGETS;

  // Calculations
  const totalPrice = useMemo((): number => {
    if (valueTargets >= UNLIMITED_TARGETS) return UNLIMITED_PRICE;
    else if (valueTargets <= FREE_TARGETS) return 0;
    else return (valueTargets - FREE_TARGETS) * COST_PER_TARGET;
  }, [valueTargets]);

  const featureList = [{
    title: 'World-class support team',
    available: true,
    info: 'Email-based support from our team in multiple timezones, staffed by engineers who work on the product.'
  }, {
    title: 'High availability (for 100+ targets only)',
    available: isEligibleHA,
    info: 'Multiple Octopus Server nodes in an active/active, highly available configuration with a load balancer in the front, ensuring you can deploy (or rollback!) 24/7. Only available in plan with more than 100 deployments.'
  }, {
    title: 'Unlimited spaces',
    available: true,
    info: 'Give each team their own space, with their own projects, environments, tenants, step templates and more.'
  }, {
    title: 'Concurrent Octopus Server instances: 3',
    available: true,
    info: 'Run one Octopus Deploy service for production usage by your team, and set up extras for dev/test. Or use two separate Octopus Deploy instances to keep production and pre-production deployments isolated.'
  }, {
    title: 'Concurrent deployment tasks: Unlimited',
    available: true,
    info: 'Maximum number of deployments that can be running at the same time (limited by hardware, of course!).'
  }, {
    title: 'File storage: Unlimited',
    available: true,
    info: 'Maximum amount of packages, artifacts and task logs that can be stored for your deployments.'
  }, {
    title: 'Database storage: Unlimited',
    available: true,
    info: 'Maximum amount of configuration data that can be stored for your deployments.',
  }, {
    title: 'Package Size: Unlimited',
    available: true,
    info: 'Maximum size of any single package stored for your deployments.',
  }];

  return (
    <>
      <Box className={styles.PricingCard + ' ' + (isEligibleUnlimited && styles.PricingCard__Unlimited)}>
        <Typography variant="h2">
          {/* eslint-disable-next-line */}
          <a href="#">Server</a>
        </Typography>
        <p>Octopus on your infrastructure</p>

        <Box className={styles.PricingCard__Price}>
          <sup>$</sup>
          {toLocaleStr(totalPrice)}
          <sup>*</sup>
          <small>/ month</small>
        </Box>

        <Box className={styles.PricingCard__Detail}>
          <p style={{ maxWidth: "15rem" }}>* $10 per target, includes 10 targets for free & unlimited deployment minutes</p>
        </Box>

        <Box>
          <Button variant="contained" color="secondary" size="large">Start 30 days trial</Button>
        </Box>

        <Box className={styles.PricingCard__BuyQuote}>
          {/* eslint-disable-next-line */}
          <a href="#">Buy now</a> or <a href="#">Get quote</a>
        </Box>

        <ul>
          {featureList.map((item, index) => (
            <li key={index} className={item.available ? '' : styles.FeatureNotAvailable}>
              {item.available ? <Check color="primary" className="icon-check" /> : <Close className="icon-close" />}
              <Tooltip arrow title={item.info} placement="top-start" className={styles.CustomToolTip}>
                <span>
                  <u>{item.title}</u>
                  <Help className="help" />
                </span>
              </Tooltip>
            </li>
          ))}
        </ul>

        <Box className={styles.PricingCard__Learn}>
          {/* eslint-disable-next-line */}
          <a href="#">
            Learn more<ChevronRight />
          </a>
        </Box>

      </Box>
    </>
  );
};
export default ServerPricing;
