import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

import { QueryPostResult, QueryPostArgs } from '../types';
import { GET_POST } from '../apollo/queries';
import { Loader } from '../components/layout';

interface PostParams {
  id: string;
}

const PostPage = () => {
  const { id } = useParams<PostParams>();
  const { data, loading } = useQuery<QueryPostResult, QueryPostArgs>(GET_POST, {
    variables: { id },
  });

  if (loading || !data) {
    return <Loader />;
  }

  const { Category, content, cover, title } = data.Post;

  return (
    <Container maxWidth="md" sx={{ paddingTop: 3, paddingBottom: 3 }}>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Chip
        color="primary"
        icon={<TurnedInNotIcon />}
        label={Category?.title}
        sx={{ my: 2 }}
        variant="outlined"
      />
      <Typography align="justify" color="text.secondary" variant="body2">
        {content}
      </Typography>

      <Stack justifyContent="center" mt={2}>
        <img src={cover} alt={title} />
      </Stack>
    </Container>
  );
};

export default PostPage;
