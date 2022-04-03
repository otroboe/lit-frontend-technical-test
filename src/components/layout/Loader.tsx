import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React, { FC } from 'react';

const LoaderWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

interface LoaderProps {
  p?: number;
}

const Loader: FC<LoaderProps> = ({ p = 3 }: LoaderProps) => (
  <LoaderWrapper p={p}>
    <CircularProgress />
    <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
      Loading
    </Typography>
  </LoaderWrapper>
);

export default Loader;
