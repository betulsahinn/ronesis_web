const { gql } = require('apollo-server-express');

const schema = gql`
    type Product {
        id: ID!
        title: String!
        description: String
        price: Float!
        category: Category!
        created_at: String!
        updated_at: String!
    }

    type Category {
        id: ID!
        name: String!
        description: String
        products: [Product!]
        created_at: String!
        updated_at: String!
    }

    type User {
        id: ID!
        email: String!
        first_name: String!
        last_name: String!
        role: String!
    }

    type Query {
        products(limit: Int, offset: Int): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
        me: User
    }

    type Mutation {
        createProduct(input: ProductInput!): Product!
        updateProduct(id: ID!, input: ProductInput!): Product!
        deleteProduct(id: ID!): Boolean!

        createCategory(input: CategoryInput!): Category!
        updateCategory(id: ID!, input: CategoryInput!): Category!
        deleteCategory(id: ID!): Boolean!

        login(email: String!, password: String!): AuthPayload!
        signup(input: SignupInput!): AuthPayload!
    }

    type AuthPayload {
        token: String!
        user: User!
    }

    input ProductInput {
        title: String!
        description: String
        price: Float!
        categoryId: ID!
    }

    input CategoryInput {
        name: String!
        description: String
    }

    input SignupInput {
        email: String!
        password: String!
        first_name: String!
        last_name: String!
    }
`;

module.exports = schema;