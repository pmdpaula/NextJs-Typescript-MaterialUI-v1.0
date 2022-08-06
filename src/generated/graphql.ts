import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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

export type MenuItem = {
  __typename?: 'MenuItem';
  /** Ícone do item */
  Icon?: Maybe<Scalars['String']>;
  /** Controle de acesso a página. */
  access: Scalars['String'];
  /** Informa se o item estará disabilitado ou não. */
  disabled: Scalars['String'];
  /** O ID do item do menu */
  ident: Scalars['ID'];
  /** Subitens do item */
  items?: Maybe<Array<MenuItem>>;
  /** Página onde o item irá apontar. */
  link?: Maybe<Scalars['String']>;
  /** O nome do item do menu */
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  menuItem?: Maybe<MenuItem>;
  menuItems: Array<MenuItem>;
};


export type QueryMenuItemArgs = {
  name: Scalars['String'];
};

export type MenuItemByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type MenuItemByNameQuery = { __typename?: 'Query', menuItem?: { __typename?: 'MenuItem', ident: string, name: string, link?: string | null, Icon?: string | null, access: string, disabled: string, items?: Array<{ __typename?: 'MenuItem', ident: string, name: string, link?: string | null, Icon?: string | null, access: string, disabled: string }> | null } | null };

export type GetMenuItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuItemsQuery = { __typename?: 'Query', menuItems: Array<{ __typename?: 'MenuItem', ident: string, name: string, link?: string | null, Icon?: string | null, access: string, disabled: string }> };


export const MenuItemByNameDocument = gql`
    query menuItemByName($name: String!) {
  menuItem(name: $name) {
    ident
    name
    link
    Icon
    access
    disabled
    items {
      ident
      name
      link
      Icon
      access
      disabled
    }
  }
}
    `;
export const GetMenuItemsDocument = gql`
    query getMenuItems {
  menuItems {
    ident
    name
    link
    Icon
    access
    disabled
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    menuItemByName(variables: MenuItemByNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MenuItemByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MenuItemByNameQuery>(MenuItemByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'menuItemByName', 'query');
    },
    getMenuItems(variables?: GetMenuItemsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMenuItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMenuItemsQuery>(GetMenuItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMenuItems', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;