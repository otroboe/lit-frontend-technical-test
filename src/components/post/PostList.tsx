import { useQuery } from '@apollo/client';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import React, { FC, useState } from 'react';

import { GET_POST_LIST } from '../../apollo/queries';
import { GetPostListResult, GetPostListVariables } from '../../types';
import { POSTS_PER_PAGE_LIMIT } from '../../utils';
import { Loader } from '../layout';
import PostListItem from './PostListItem';

interface PostListProps {}

const PostList: FC<PostListProps> = (): JSX.Element => {
  const [page, setPage] = useState(0);
  const { fetchMore, data, loading } = useQuery<
    GetPostListResult,
    GetPostListVariables
  >(GET_POST_LIST, {
    variables: {
      page,
      perPage: POSTS_PER_PAGE_LIMIT,
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

      {loading && (
        <Box p={3}>
          <Loader />
        </Box>
      )}

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
