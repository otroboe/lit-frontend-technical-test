import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Post } from '../../types';
import { truncate } from '../../utils';

interface PostListItemProps {
  cardElevation?: number;
  cardMaxWidth?: number;
  imageHeight?: number;
  post: Post;
}

const PostListItem: FC<PostListItemProps> = ({
  cardElevation = 4,
  cardMaxWidth = 400,
  imageHeight = 200,
  post,
}: PostListItemProps): JSX.Element => {
  const { content, cover, id, title } = post;

  return (
    <Card sx={{ maxWidth: cardMaxWidth }} elevation={cardElevation}>
      <CardMedia
        alt={title}
        component="img"
        height={`${imageHeight}`}
        image={cover}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncate(content)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          component={Link}
          size="small"
          to={`/post/${id}`}
        >
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostListItem;
