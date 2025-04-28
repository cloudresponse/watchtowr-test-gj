import { ColumnDef } from "@tanstack/react-table";
import { Expense } from "../../gql/graphql";
import { Button } from "../ui/button";

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "submittedBy",
    header: "Submitted By",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.original.createdAt}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right">£{row.original.amount.toFixed(2)}</div>
      );
    },
  },
];
