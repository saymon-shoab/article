/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodopost = /* GraphQL */ `
  mutation CreateTodopost(
    $input: CreateTodopostInput!
    $condition: ModelTodopostConditionInput
  ) {
    createTodopost(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodopost = /* GraphQL */ `
  mutation UpdateTodopost(
    $input: UpdateTodopostInput!
    $condition: ModelTodopostConditionInput
  ) {
    updateTodopost(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodopost = /* GraphQL */ `
  mutation DeleteTodopost(
    $input: DeleteTodopostInput!
    $condition: ModelTodopostConditionInput
  ) {
    deleteTodopost(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const createLogin = /* GraphQL */ `
  mutation CreateLogin(
    $input: CreateLoginInput!
    $condition: ModelLoginConditionInput
  ) {
    createLogin(input: $input, condition: $condition) {
      id
      email
      passcode
      createdAt
      updatedAt
    }
  }
`;
export const updateLogin = /* GraphQL */ `
  mutation UpdateLogin(
    $input: UpdateLoginInput!
    $condition: ModelLoginConditionInput
  ) {
    updateLogin(input: $input, condition: $condition) {
      id
      email
      passcode
      createdAt
      updatedAt
    }
  }
`;
export const deleteLogin = /* GraphQL */ `
  mutation DeleteLogin(
    $input: DeleteLoginInput!
    $condition: ModelLoginConditionInput
  ) {
    deleteLogin(input: $input, condition: $condition) {
      id
      email
      passcode
      createdAt
      updatedAt
    }
  }
`;
export const createBlogpost = /* GraphQL */ `
  mutation CreateBlogpost(
    $input: CreateBlogpostInput!
    $condition: ModelBlogpostConditionInput
  ) {
    createBlogpost(input: $input, condition: $condition) {
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
export const updateBlogpost = /* GraphQL */ `
  mutation UpdateBlogpost(
    $input: UpdateBlogpostInput!
    $condition: ModelBlogpostConditionInput
  ) {
    updateBlogpost(input: $input, condition: $condition) {
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
export const deleteBlogpost = /* GraphQL */ `
  mutation DeleteBlogpost(
    $input: DeleteBlogpostInput!
    $condition: ModelBlogpostConditionInput
  ) {
    deleteBlogpost(input: $input, condition: $condition) {
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
