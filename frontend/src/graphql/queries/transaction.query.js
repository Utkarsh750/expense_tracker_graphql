import { gql } from "@apollo/client";

export const GET_TRANSACTION = gql`
  query GetTransactions {
    transactions {
      _id
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`;
