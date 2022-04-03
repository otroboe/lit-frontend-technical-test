import { Category, ListMetadata } from './graphql';

export interface QueryAllCategoriesResult {
  allCategories: Category[];
}

export interface Query_AllCategoriesMetaResult {
  _allCategoriesMeta: ListMetadata;
}

export interface QueryCategoryResult {
  Category: Category;
}
