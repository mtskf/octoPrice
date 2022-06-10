// import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import { ReactComponent as WaveBg } from 'assets/img/wave.svg';
import styles from "./styles.module.scss";

const PricingHero = () => {
  return (
    <>
      <Box className={styles.PageHero} >
        <div className={styles.Container}>
          <nav>
            <ul>
              <li className="active">Overview</li>
              <li>Cloud</li>
              <li>Server</li>
              <li>FAQ</li>
            </ul>
          </nav>

          <Typography variant="h1">Only pay for what you use</Typography>
          <p>No hidden fees. Simple pricing as your business scales.<br />
            You’ll pay monthly in arrears based on actual usage.<br />
            Let’s check estimated cost for your needs!
          </p>
        </div>
        <WaveBg className="waveBg" />
      </Box>
    </>
  );
};
export default PricingHero;
