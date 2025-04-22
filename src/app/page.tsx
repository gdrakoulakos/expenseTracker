import { expenses } from "@/data/expenses";
import ExpenseTable from "@/components/ExpenseTable";

export default function HomePage() {
  return (
    <main>
      <h1>Personal Expense Tracker</h1>
      <ExpenseTable expenses={expenses} />
    </main>
  );
}
