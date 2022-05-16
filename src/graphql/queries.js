/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlogpost = /* GraphQL */ `
  query GetBlogpost($id: ID!) {
    getBlogpost(id: $id) {
      id
      title
      content
      username
      coverImage
      createdAt
      updatedAt
    }
  }
`;
export const listBlogposts = /* GraphQL */ `
  query ListBlogposts(
    $filter: ModelBlogpostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogposts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        username
        coverImage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodopost = /* GraphQL */ `
  query GetTodopost($id: ID!) {
    getTodopost(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodoposts = /* GraphQL */ `
  query ListTodoposts(
    $filter: ModelTodopostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodoposts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLogin = /* GraphQL */ `
  query GetLogin($id: ID!) {
    getLogin(id: $id) {
      id
      email
      passcode
      createdAt
      updatedAt
    }
  }
`;
export const listLogins = /* GraphQL */ `
  query ListLogins(
    $filter: ModelLoginFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        passcode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const blogsByUsername = /* GraphQL */ `
  query BlogsByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBlogpostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blogsByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        content
        username
        coverImage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
