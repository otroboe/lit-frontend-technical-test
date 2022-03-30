import { gql } from '@apollo/client';

import { postBaseFields } from '../fragments';

export const GET_POST_LIST = gql`
  ${postBaseFields}

  query GetPostList($page: Int, $perPage: Int) {
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
