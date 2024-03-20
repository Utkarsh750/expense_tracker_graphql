import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import mergedResolvers from "./resolvers/index.js";
import mergedTypedefs from "./typeDefs/index.js";

const server = new ApolloServer({
  typeDefs: mergedTypedefs,
  resolvers: mergedResolvers,
});
const { url } = await startStandaloneServer(server);

console.log(`Server is ready at ${url}`);
