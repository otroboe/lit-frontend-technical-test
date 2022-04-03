import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';
import { ConnectDropTarget } from 'react-dnd';

interface DropzoneProps {
  dropRef: ConnectDropTarget;
  height?: number;
  isOver: boolean;
  message?: string;
}

const Dropzone: FC<DropzoneProps> = ({
  dropRef,
  height = 300,
  isOver,
  message = 'Drop here',
}: DropzoneProps): JSX.Element => {
  const theme = useTheme();
  const backgroundColor = isOver
    ? theme.palette.grey[400]
    : theme.palette.grey[200];

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      m={2}
      ref={dropRef}
      sx={{
        backgroundColor,
        border: `1px dashed ${theme.palette.grey[400]}`,
        height,
      }}
    >
      <Typography variant="subtitle1">{message}</Typography>
    </Stack>
  );
};

export default Dropzone;
