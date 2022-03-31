import { ListMetadata, Post } from './graphql';

export interface QueryAllPostsResult {
  allPosts: Post[];
  _allPostsMeta: ListMetadata;
}

export interface QueryPostResult {
  Post: Post;
}
