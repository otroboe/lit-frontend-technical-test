import { useQuery } from '@apollo/client';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import React, { FC, useState } from 'react';

import client from '../../apollo';
import { GET_ALL_POSTS } from '../../apollo/queries';
import { QueryAllPostsArgs, QueryAllPostsResult } from '../../types';
import { POSTS_PER_PAGE_LIMIT } from '../../utils';
import { Loader } from '../layout';
import PostListItem from './PostListItem';

interface PostListProps {
  perPage?: number;
}

const PostList: FC<PostListProps> = ({
  perPage = POSTS_PER_PAGE_LIMIT,
}): JSX.Element => {
  // Detect the result in cache to re-adjust the page number when coming back with back navigation
  const cachedResult = client.readQuery<QueryAllPostsResult>({
    query: GET_ALL_POSTS,
  });
  const initialPage = cachedResult
    ? cachedResult.allPosts.length / perPage - 1
    : 0;

  const [page, setPage] = useState(initialPage);
  const { fetchMore, data, loading } = useQuery<
    QueryAllPostsResult,
    QueryAllPostsArgs
  >(GET_ALL_POSTS, {
    variables: {
      page,
      perPage,
    },
  });

  const postList = data?.allPosts ?? [];
  const total = data?._allPostsMeta?.count ?? 0;
  const showReadMoreBtn = postList.length < total;

  const handleClickFetchMore = () => {
    const newPage = page + 1;

    setPage(newPage);
    fetchMore({
      variables: {
        page: newPage,
      },
    });
  };

  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        {postList.map((post, idx) => (
          <Grid item key={idx}>
            <PostListItem post={post} />
          </Grid>
        ))}
      </Grid>

      {loading && <Loader />}

      {showReadMoreBtn && (
        <Stack direction="row" justifyContent="center" mt={3}>
          <LoadingButton
            color="secondary"
            loading={loading}
            onClick={handleClickFetchMore}
            size="large"
            variant="contained"
          >
            Fetch more
          </LoadingButton>
        </Stack>
      )}
    </>
  );
};

export default PostList;
