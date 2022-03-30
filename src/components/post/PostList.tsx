import { useQuery } from '@apollo/client';
import Grid from '@mui/material/Grid';
import React, { FC } from 'react';

import { GET_POST_LIST } from '../../apollo/queries';
import { GetPostListResult, GetPostListVariables } from '../../types';
import { POSTS_PER_PAGE_LIMIT } from '../../utils';
import { Loader } from '../layout';
import PostListItem from './PostListItem';

interface PostListProps {}

const PostList: FC<PostListProps> = (): JSX.Element => {
  const { data, loading } = useQuery<GetPostListResult, GetPostListVariables>(
    GET_POST_LIST,
    {
      variables: {
        page: 0,
        perPage: POSTS_PER_PAGE_LIMIT,
      },
    },
  );

  if (loading || !data) {
    return <Loader />;
  }

  const { allPosts: postList, _allPostsMeta: metadata } = data;
  const { count: total } = metadata;

  return (
    <Grid container spacing={3} justifyContent="center">
      {postList.map((post, idx) => (
        <Grid item key={idx}>
          <PostListItem post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
