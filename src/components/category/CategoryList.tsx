import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import List from '@mui/material/List';

import { GET_ALL_CATEGORIES } from '../../apollo/queries';
import { QueryAllCategoriesArgs, QueryAllCategoriesResult } from '../../types';
import { Loader } from '../layout';
import CategoryListItem from './CategoryListItem';

interface CategoryListProps {
  limit?: number;
}

const CategoryList: FC<CategoryListProps> = ({
  limit = 100,
}: CategoryListProps): JSX.Element => {
  const { loading, data } = useQuery<
    QueryAllCategoriesResult,
    QueryAllCategoriesArgs
  >(GET_ALL_CATEGORIES, {
    variables: {
      perPage: limit,
    },
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <List>
      {(data?.allCategories || []).map((category) => (
        <CategoryListItem category={category} key={category.id} />
      ))}
    </List>
  );
};

export default CategoryList;
