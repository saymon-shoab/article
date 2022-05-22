/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodopost = /* GraphQL */ `
  subscription OnCreateTodopost {
    onCreateTodopost {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodopost = /* GraphQL */ `
  subscription OnUpdateTodopost {
    onUpdateTodopost {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodopost = /* GraphQL */ `
  subscription OnDeleteTodopost {
    onDeleteTodopost {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLogin = /* GraphQL */ `
  subscription OnCreateLogin {
    onCreateLogin {
      id
      email
      passcode
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLogin = /* GraphQL */ `
  subscription OnUpdateLogin {
    onUpdateLogin {
      id
      email
      passcode
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLogin = /* GraphQL */ `
  subscription OnDeleteLogin {
    onDeleteLogin {
      id
      email
      passcode
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBlogpost = /* GraphQL */ `
  subscription OnCreateBlogpost($username: String) {
    onCreateBlogpost(username: $username) {
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
export const onUpdateBlogpost = /* GraphQL */ `
  subscription OnUpdateBlogpost($username: String) {
    onUpdateBlogpost(username: $username) {
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
export const onDeleteBlogpost = /* GraphQL */ `
  subscription OnDeleteBlogpost($username: String) {
    onDeleteBlogpost(username: $username) {
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
