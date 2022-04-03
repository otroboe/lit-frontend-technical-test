import React, { FC, useContext, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

import { Category, DND_TYPES } from '../../types';
import { truncate } from '../../utils';
import { CategoryContext } from '../../providers/CategoryProvider';

interface CategoryListItemProps {
  category: Category;
}

const CategoryListItem: FC<CategoryListItemProps> = ({
  category,
}: CategoryListItemProps): JSX.Element => {
  const { setDragging } = useContext(CategoryContext);
  const [{ isDragging }, dragSourceRef] = useDrag(() => ({
    type: DND_TYPES.CATEGORY,
    item: { id: category.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    setDragging(isDragging);
  }, [isDragging, setDragging]);

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
