import { ListMetadata, Post } from './graphql';

export interface GetPostListResult {
  allPosts: Post[];
  _allPostsMeta: ListMetadata;
}

export interface GetPostListVariables {
  page: number;
  perPage: number;
}
