import React, { FC, useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { ClickAwayListener, IconButton, Tooltip } from '@mui/material';

interface InfoIconProps {
  message: string;
  placement?: TooltipPlacement;
}

const InfoTooltip: FC<InfoIconProps> = ({
  message,
  placement = 'left',
}: InfoIconProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        arrow
        disableFocusListener
        disableHoverListener
        disableTouchListener
        onClose={handleTooltipClose}
        open={open}
        placement={placement}
        title={message}
      >
        <IconButton
          aria-label={message}
          color="info"
          onClick={handleTooltipOpen}
          onMouseDown={handleTooltipOpen}
        >
          <InfoIcon />
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );
};

type TooltipPlacement =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';

export default InfoTooltip;
