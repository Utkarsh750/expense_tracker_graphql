const userTypeDef = `
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    profilePicture: String
    gender: String!
}

type Query {
    users: [User!]
    authUser: User
    user(userId:ID!): User
}

 type Mutation {
    signup(input: SignUpInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
 }

 input SignUpInput {
    name : String!
    username: String!
    password: String!
    gender: String!
 }
 
 input LoginInput {
    username: String!
    password: String!
 }

 type LogoutResponse {
    message : String!
 }
`;

export default userTypeDef;
