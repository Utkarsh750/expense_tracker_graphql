const transactionResolver = {
  Query: {
    transactions: async (_, _, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorised");
      } catch (error) {}
    },
  },
  Mutation: {},
};
export default transactionResolver;
