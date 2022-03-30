import { gql } from '@apollo/client';

import { postBaseFields } from '../fragments';

export const GET_POST_LIST = gql`
  ${postBaseFields}
  query GetPostList($page: Int, $perPage: Int) {
    allPosts(page: $page, perPage: $perPage) {
      ...PostBaseFields
      Category {
        id
        title
      }
    }

    _allPostsMeta {
      count
    }
  }
`;
