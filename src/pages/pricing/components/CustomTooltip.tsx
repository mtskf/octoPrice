import { useState } from "react";
import { Box, Tooltip } from "@material-ui/core";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const CustomTooltip = ({ ...props }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleToggle = () => {
    open ? handleClose() : handleOpen();
  }

  return (
    <>
      <ClickAwayListener onClickAway={handleClose}>
        <Tooltip
          title={props.title}
          {...props}
          PopperProps={{ disablePortal: true }}
          onClose={handleClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
        >
          <Box onClick={handleToggle}>
            {props.children}
          </Box>
        </Tooltip>
      </ClickAwayListener>
    </>
  );
};
export default CustomTooltip;
