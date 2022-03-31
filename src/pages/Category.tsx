import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useQuery } from '@apollo/client';

import { GET_ALL_CATEGORIES_META } from '../apollo/queries';
import CategoryList from '../components/category/CategoryList';
import { Loader, InfoTooltip } from '../components/layout';
import {
  Query_AllCategoriesMetaResult,
  Query_AllCategoriesMetaArgs,
} from '../types';

const Category = () => {
  // Check the total of categories before loading all of them in child component
  const { loading, data } = useQuery<
    Query_AllCategoriesMetaResult,
    Query_AllCategoriesMetaArgs
  >(GET_ALL_CATEGORIES_META);

  const categoryListLimit = data?._allCategoriesMeta?.count ?? undefined;
  const categoryListTitle = `Available Categories ${
    categoryListLimit ? `(${categoryListLimit})` : ''
  }`;

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 3, paddingBottom: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ paddingTop: 3, paddingBottom: 3 }}>
          <p>Dropzone area</p>
        </Grid>

        <Grid item xs={4}>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            sx={{ borderBottom: '1px solid #313131' }}
          >
            <Typography variant="subtitle1">{categoryListTitle}</Typography>

            <InfoTooltip
              message="You have to drag a category in the main area on the left"
              placement="bottom-start"
            />
          </Stack>

          {loading ? <Loader /> : <CategoryList limit={categoryListLimit} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Category;
