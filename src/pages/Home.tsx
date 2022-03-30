import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { PostList } from '../components/post';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ paddingTop: 3, paddingBottom: 3 }}>
      <Box sx={{ marginBottom: 3, borderBottom: '1px solid #313131' }}>
        <Typography variant="h4">Latest Posts</Typography>
      </Box>

      <PostList />
    </Container>
  );
};

export default Home;
