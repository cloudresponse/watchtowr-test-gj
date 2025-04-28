import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import ExpensesTable from "../components/ExpensesTable/ExpensesTable";

const GET_EXPENSES = gql`
  query GetExpenses {
    expenses {
      id
      description
      amount
      category
      submittedBy
      createdAt
    }
  }
`;

export default function ExpensesPage() {
  const { loading, error, data, refetch } = useQuery(GET_EXPENSES);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return <ExpensesTable data={data?.expenses} refetch={refetch} />;
}
