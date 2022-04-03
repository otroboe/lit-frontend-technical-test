import React, { FC, useContext } from 'react';
import Grid from '@mui/material/Grid';
import { useDrop } from 'react-dnd';

import { CategoryContext } from '../../providers/CategoryProvider';
import { DndItemCategory, DND_TYPES, Post } from '../../types';
import { ContainerTitle, Dropzone, Loader } from '../layout';
import { PostListItem } from '../post';

const CategoryContent: FC = () => {
  const { category, dragging, loading } = useContext(CategoryContext);
  const { setCategoryId } = useContext(CategoryContext);

  // Force type to avoid <Maybe>
  const postList = (category?.Posts || []).filter(
    (post) => post !== null && post !== undefined,
  ) as Post[];

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: DND_TYPES.CATEGORY,
    drop: (item: DndItemCategory) => {
      setCategoryId(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ContainerTitle title="Category's posts" />

      {!category || dragging ? (
        <Dropzone
          isOver={isOver}
          dropRef={dropRef}
          message="Drop category here"
        />
      ) : (
        <Grid container spacing={3} justifyContent="center" pt={2}>
          {postList.map((post, idx) => (
            <Grid item key={idx}>
              <PostListItem cardMaxWidth={350} post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default CategoryContent;
