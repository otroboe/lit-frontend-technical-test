import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';

import { CategoryContent, CategorySidebar } from '../components/category';
import CategoryProvider from '../providers/CategoryProvider';

const CategoryPage = () => (
  <CategoryProvider>
    <Container maxWidth="lg" sx={{ paddingTop: 3, paddingBottom: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CategoryContent />
        </Grid>

        <Grid item xs={4}>
          <CategorySidebar />
        </Grid>
      </Grid>
    </Container>
  </CategoryProvider>
);

export default CategoryPage;
