import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_ALL_CATEGORIES_META } from '../../apollo/queries';
import CategoryList from '../../components/category/CategoryList';
import { ContainerTitle, Loader } from '../../components/layout';
import {
  Query_AllCategoriesMetaResult,
  Query_AllCategoriesMetaArgs,
} from '../../types';

const CategorySidebar = () => {
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
    <>
      <ContainerTitle
        title={categoryListTitle}
        info="You have to drag a category in the main area on the left"
      />

      {loading ? <Loader /> : <CategoryList limit={categoryListLimit} />}
    </>
  );
};

export default CategorySidebar;
