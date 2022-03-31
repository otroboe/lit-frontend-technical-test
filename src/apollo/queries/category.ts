import { gql } from '@apollo/client';

import { categoryBaseFields, postBaseFields } from '../fragments';

export const GET_ALL_CATEGORIES = gql`
  ${categoryBaseFields}

  query GetAllCategories($page: Int, $perPage: Int) {
    allCategories(page: $page, perPage: $perPage) {
      ...CategoryBaseFields
    }
  }
`;

export const GET_ALL_CATEGORIES_META = gql`
  query GetAllCategoriesMeta {
    _allCategoriesMeta {
      count
    }
  }
`;

export const GET_CATEGORY = gql`
  ${categoryBaseFields}
  ${postBaseFields}

  query GetCategory($id: ID!) {
    Category(id: $id) {
      ...CategoryBaseFields
      Posts {
        ...PostBaseFields
      }
    }
  }
`;
