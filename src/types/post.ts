import { ListMetadata, Post } from './graphql';

export interface GetPostListResult {
  allPosts: Post[];
  _allPostsMeta: ListMetadata;
}

export interface GetPostListVariables {
  page: number;
  perPage: number;
}

export interface GetPostResult {
  Post: Post;
}

export interface GetPostVariables {
  id: string;
}
