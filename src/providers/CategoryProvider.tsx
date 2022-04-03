import { useLazyQuery } from '@apollo/client';
import { createContext, FC, useState } from 'react';
import { GET_CATEGORY } from '../apollo/queries';
import { Category, QueryCategoryArgs, QueryCategoryResult } from '../types';

interface ContextProps {
  category?: Category;
  dragging: boolean;
  loading: boolean;
  setCategoryId: (id: string) => void;
  setDragging: (dragging: boolean) => void;
}

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

const CategoryContext = createContext<ContextProps>({
  dragging: false,
  loading: false,
  setCategoryId: () => {},
  setDragging: () => {},
});

const CategoryProvider: FC<ProviderProps> = ({
  children,
}: ProviderProps): JSX.Element => {
  const [dragging, setDragging] = useState(false);
  const [loadCategory, { loading, data }] = useLazyQuery<
    QueryCategoryResult,
    QueryCategoryArgs
  >(GET_CATEGORY);

  const setCategoryId = (newId: string) => {
    loadCategory({ variables: { id: newId } });
  };

  return (
    <CategoryContext.Provider
      value={{
        category: data?.Category,
        dragging,
        loading,
        setCategoryId,
        setDragging,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext };
export default CategoryProvider;
