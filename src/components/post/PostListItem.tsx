import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
  cardElevation = 2,
  cardMaxWidth = 400,
  imageHeight = 150,
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
        <Typography gutterBottom variant="subtitle1" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncate(content)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button color="primary" component={Link} to={`/post/${id}`}>
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostListItem;
