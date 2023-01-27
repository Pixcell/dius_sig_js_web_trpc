/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Item = {
  __typename?: 'Item';
  description: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
};

export type List = {
  __typename?: 'List';
  id: Scalars['String'];
  items?: Maybe<Array<Maybe<Item>>>;
  title: Scalars['String'];
};


export type ListItemsArgs = {
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem?: Maybe<Item>;
  deleteItem?: Maybe<Scalars['String']>;
  updateItem?: Maybe<Item>;
};


export type MutationCreateItemArgs = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteItemArgs = {
  id: Scalars['String'];
};


export type MutationUpdateItemArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  list?: Maybe<Array<Maybe<Item>>>;
};
