import { Expense } from "@/types/expense";
import styles from "@/components/ExpenseTable.module.css";

interface Props {
  expenses: Expense[];
}

export default function ExpenseTable({ expenses }: Props) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id} className={styles.bodyRow}>
            <td>{exp.category}</td>
            <td>{exp.amount.toFixed(2)}€</td>
            <td>{exp.date}</td>
            <td>{exp.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
