import { gql } from '@apollo/client';

export const categoryBaseFields = gql`
  fragment CategoryBaseFields on Category {
    description
    id
    title
  }
`;
