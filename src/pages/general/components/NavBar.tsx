// import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { ChevronRight, Menu } from '@material-ui/icons';
import styles from "./styles.module.scss";
import { ReactComponent as Logo } from 'assets/img/logo.svg';

const TOGGLE_THRESHOLD = 40;;

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const updateIsScrolled = () => {
    const scrollTop = window.pageYOffset;
    if (isScrolled && scrollTop < TOGGLE_THRESHOLD) setIsScrolled(false);
    else if (!isScrolled && scrollTop >= TOGGLE_THRESHOLD) setIsScrolled(true);
  }

  const listener = () => {
    requestAnimationFrame(updateIsScrolled);
  }

  useEffect(() => {
    document.addEventListener('scroll', listener)
    return () => {
      document.removeEventListener('scroll', listener)
    }
  });

  return (
    <Box className={styles.OctoNavBar} data-scrolled={isScrolled}>
      <nav className={styles.Container}>
        <ul>
          <li><Logo className="logo" title="accessible Logo title" /></li>
          <li className="hideMobile">Features</li>
          <li className="hideMobile">Pricing</li>
          <li className="hideMobile">What's New</li>
          <li className="hideMobile">Resources</li>
          <li className="hideMobile">Blog</li>
          <li className="hideMobile">Enterprise</li>
          <li className="NavSpacer"></li>
          <li className="hideMobile">Sign in</li>
          <li className="hideMobile">
            <Button variant="contained" color="secondary">Start a trial<ChevronRight />
            </Button>
          </li>
          <li className="showMobile">
            <Menu />
          </li>
        </ul>
      </nav>
    </Box>
  );
};
export default NavBar;