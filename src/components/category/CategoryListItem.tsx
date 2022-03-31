import React, { FC } from 'react';
import { useDrag } from 'react-dnd';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

import { Category, DND_TYPES } from '../../types';
import { truncate } from '../../utils';

interface CategoryListItemProps {
  category: Category;
}

const CategoryListItem: FC<CategoryListItemProps> = ({
  category,
}: CategoryListItemProps): JSX.Element => {
  const [, dragSourceRef] = useDrag(() => ({
    type: DND_TYPES.CATEGORY,
    item: { id: category.id },
  }));

  return (
    <ListItem ref={dragSourceRef}>
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
  );
};

export default CategoryListItem;
