import { gql } from '@apollo/client';

export const postBaseFields = gql`
  fragment PostBaseFields on Post {
    content
    cover
    id
    title
  }
`;
