// import * as React from "react";
import { useState, useMemo } from "react";
import { Box, Typography } from "@material-ui/core";
import { ReactComponent as WaveBg } from 'assets/img/wave.svg';
// import { makeStyles, } from "@material-ui/core/styles";
// import { toLocaleStr, handleInvalidValue } from "../../../utils";
import styles from "./styles.module.scss";

const FREE_TARGETS = 10;
const FREE_MINUTES = 100;

const PricingModule = () => {
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
            Let’s check estimated cost for your needs
          </p>
        </div>
        <WaveBg className="waveBg" />
      </Box>
    </>
  );
};
export default PricingModule;
