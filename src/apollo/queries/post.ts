import { gql } from '@apollo/client';

import { postBaseFields } from '../fragments';

export const GET_ALL_POSTS = gql`
  ${postBaseFields}

  query GetAllPosts($page: Int, $perPage: Int) {
    allPosts(page: $page, perPage: $perPage) {
      ...PostBaseFields
    }
    _allPostsMeta {
      count
    }
  }
`;

export const GET_POST = gql`
  ${postBaseFields}

  query GetPost($id: ID!) {
    Post(id: $id) {
      ...PostBaseFields
      Category {
        id
        title
      }
    }
  }
`;
