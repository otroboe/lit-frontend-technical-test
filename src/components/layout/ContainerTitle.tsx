import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import InfoTooltip from './InfoTooltip';

const ContainerTitle: FC<ContainerTitleProps> = ({
  info,
  title,
}: ContainerTitleProps): JSX.Element => (
  <Stack
    alignItems="center"
    direction="row"
    justifyContent="space-between"
    sx={{ borderBottom: '1px solid #313131', minHeight: 50 }}
  >
    <Typography variant="subtitle1">{title}</Typography>

    {info && <InfoTooltip message={info} placement="bottom-start" />}
  </Stack>
);

interface ContainerTitleProps {
  info?: string;
  title: string;
}

export default ContainerTitle;
