import Transaction from "../model/transaction.model.js";
const transactionResolver = {
  Query: {
    transactions: async (_, _, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorised");
        const userId = await context.getUser()._id;

        const transactions = await Transaction.find({ userId });
        return transactions;
      } catch (error) {
        console.error("Error getting transaction", error);
        throw new Error("Error getting transaction");
      }
    },

    transaction: async (_, { transactionId }) => {
      try {
        const transaction = await Transaction.findById(transactionId);
        return transaction;
      } catch (error) {
        console.error("Error getting transaction", error);
        throw new Error("Error getting transaction");
      }
    },
  },
  Mutation: {},
};
export default transactionResolver;
