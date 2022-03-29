import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ paddingTop: 3, paddingBottom: 3 }}>
      <Box sx={{ marginBottom: 3, borderBottom: '1px solid #313131' }}>
        <Typography variant="h4">Latest Posts</Typography>
      </Box>

      {/* // TODO, this is where we want to list all our Posts */}
      <p>Posts list</p>

      {/* // TODO, this is where we want to add a fetchMore button */}
      <p>Fetch More button</p>
    </Container>
  );
};

export default Home;
