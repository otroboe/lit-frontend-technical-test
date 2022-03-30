import { gql } from '@apollo/client';

export const postBaseFields = gql`
  fragment PostBaseFields on Post {
    category_id
    content
    cover
    id
    title
  }
`;
