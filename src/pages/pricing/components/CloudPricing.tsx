import { useMemo } from "react";
import { Box, Typography, Button, Tooltip } from "@material-ui/core";
import { Check, Close, Help, ChevronRight } from '@material-ui/icons';
import styles from "./styles.module.scss";
import { toLocaleStr } from "lib/utils";

interface PropsType {
  valueTargets: number;
  valueMinutes: number;
}

const FREE_TARGETS = 10;
const FREE_MINUTES = 100;
const MAX_TARGETS = 5000;
const MAX_MINUTES = 10000;
const COST_PER_TARGET = 10;
const COST_PER_MINUTE = 0.03;
const HIGH_AVAILABILITY_TARGETS = 100;
const SERVER_UNLIMITED_TARGETS = 2000;

const CloudPricing = ({ valueTargets, valueMinutes }: PropsType) => {

  const isEligibleHA = useMemo(() => valueTargets >= HIGH_AVAILABILITY_TARGETS, [valueTargets]);

  const targetsPrice = useMemo((): number | null => {
    if (valueTargets > MAX_TARGETS) return null;

    const chargedTargets = valueTargets > FREE_TARGETS ? valueTargets - FREE_TARGETS : 0;

    return chargedTargets * COST_PER_TARGET;
  }, [valueTargets]);


  const minutesPrice = useMemo((): number | null => {
    if (valueMinutes > MAX_MINUTES) return null;

    const chargedMinutes = valueMinutes > FREE_MINUTES ? valueMinutes - FREE_MINUTES : 0;

    return chargedMinutes * COST_PER_MINUTE;
  }, [valueMinutes]);

  const isAvailable: boolean = targetsPrice !== null && minutesPrice !== null;
  const totalPrice = isAvailable ? targetsPrice! + minutesPrice! : null;

  const RenderPriceBox = (isAvailable: boolean) => isAvailable ? (
    <Box className={styles.PricingCard__Price}>
      <span>
        <sup>$</sup>
        {toLocaleStr(totalPrice || 0)}
        <sup>*</sup>
        <small>/ month</small>
      </span>
    </Box>
  ) : (
    <Box className={styles.PricingCard__Price}>
      <span className="notAvailable">
        Not available<sup>*</sup>
      </span>
    </Box>
  );

  const RenderPriceDetail = (isAvailable: boolean) => isAvailable ? (
    <Box className={styles.PricingCard__Detail}>
      <p style={{ maxWidth: "18.5rem" }}>* $10 per target + $0.03 per deployment minutes, includes 10 targets & 100 deployment minutes for free</p>
    </Box>
  ) : (
    <Box className={styles.PricingCard__Detail}>
      <p style={{ maxWidth: "15rem" }}>* Deployment targets are up to {MAX_TARGETS}, and deployment minutes are up to {MAX_MINUTES}.</p>
    </Box>
  );

  const featureList = [{
    title: 'World-class support team',
    available: true,
    info: 'Email-based support from our team in multiple timezones, staffed by engineers who work on the product.'
  }, {
    title: 'High availability (for 100 + targets only)',
    available: isEligibleHA,
    info: 'Multiple Octopus Server nodes in an active/active, highly available configuration with a load balancer in the front, ensuring you can deploy (or rollback!) 24/7. Only available in plan with more than 100 deployments.'
  }, {
    title: 'Unlimited spaces',
    available: true,
    info: 'Give each team their own space, with their own projects, environments, tenants, step templates and more.'
  }, {
    title: 'Concurrent Octopus Server instances: 1',
    available: true,
    info: 'Run one Octopus Deploy service for production usage by your team, and set up extras for dev/test. Or use two separate Octopus Deploy instances to keep production and pre-production deployments isolated.'
  }, {
    title: 'Concurrent deployment tasks: Scalable',
    available: true,
    info: 'Maximum number of deployments that can be running at the same time (limited by hardware, of course!).'
  }, {
    title: 'File storage: 1TB',
    available: true,
    info: 'Maximum amount of packages, artifacts and task logs that can be stored for your deployments.'
  }, {
    title: 'Database storage: 1TB',
    available: true,
    info: 'Maximum amount of configuration data that can be stored for your deployments.',
  }, {
    title: 'Package Size: 5GB',
    available: true,
    info: 'Maximum size of any single package stored for your deployments.',
  }];

  const isPopular = isAvailable && valueTargets <= SERVER_UNLIMITED_TARGETS;

  return (
    <>
      <Box
        className={
          styles.PricingCard
          + ' ' +
          (isPopular && styles.PricingCard__Popular)
          + ' ' +
          (!isAvailable && styles.PricingCard__NotAvailable)
        }
      >
        <Typography variant="h2"><a href="#">Cloud</a></Typography>
        <p>DevOps automation as-a-service</p>

        {RenderPriceBox(isAvailable)}

        {RenderPriceDetail(isAvailable)}

        <Box>
          <Button variant="contained" color="secondary" size="large">Start 30 days trial</Button>
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
          <a href="#">
            Learn more<ChevronRight />
          </a>
        </Box>
      </Box>
    </>
  );
};
export default CloudPricing;
