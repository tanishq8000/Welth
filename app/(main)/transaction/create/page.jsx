import { getUserAccounts } from "@/actions/dashboard";
import { AddTransactionForm } from "../_components/transaction-form";
import { defaultCategories } from "@/Data/categories";

export default async function AddTransactionPage({ searchParams }) {
  const accounts = await getUserAccounts();

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title ">Add Transaction</h1>
      </div>
      <AddTransactionForm accounts={accounts} categories={defaultCategories} />
    </div>
  );
}
