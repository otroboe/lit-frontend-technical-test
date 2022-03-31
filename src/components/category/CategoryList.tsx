import { useQuery } from '@apollo/client';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import React, { FC } from 'react';

import { GET_ALL_CATEGORIES } from '../../apollo/queries';
import { QueryAllCategoriesArgs, QueryAllCategoriesResult } from '../../types';
import { truncate } from '../../utils';
import { Loader } from '../layout';

interface CategoryListProps {
  limit?: number;
}

const CategoryList: FC<CategoryListProps> = ({
  limit = 100,
}: CategoryListProps): JSX.Element => {
  const { loading, data } = useQuery<
    QueryAllCategoriesResult,
    QueryAllCategoriesArgs
  >(GET_ALL_CATEGORIES, {
    variables: {
      perPage: limit,
    },
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <List>
      {(data?.allCategories || []).map((category) => (
        <ListItem key={category.id}>
          <ListItemAvatar>
            <Avatar>
              <TurnedInNotIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={category.title}
            secondary={truncate(category.description, 30)}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
