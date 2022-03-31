import React, { FC } from 'react';
import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useDrop } from 'react-dnd';

import { DndItemCategory, DND_TYPES } from '../../types';

interface DropzoneProps {
  height?: number;
}

const Dropzone: FC<DropzoneProps> = ({
  height = 300,
}: DropzoneProps): JSX.Element => {
  const theme = useTheme();
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: DND_TYPES.CATEGORY,
    drop: (item: DndItemCategory) => {
      console.log({ item });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const backgroundColor = isOver
    ? theme.palette.grey[400]
    : theme.palette.grey[200];

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      mt={2}
      ref={dropRef}
      sx={{
        backgroundColor,
        border: `1px dashed ${theme.palette.grey[400]}`,
        height,
      }}
    >
      <Typography variant="subtitle1">Drop category here</Typography>
    </Stack>
  );
};

export default Dropzone;
