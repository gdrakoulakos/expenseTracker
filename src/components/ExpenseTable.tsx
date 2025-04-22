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
          <th>Paid</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id} className={styles.bodyRow}>
            <td>{exp.category}</td>
            <td>{exp.amount.toFixed(2)}€</td>
            <td>{exp.date}</td>
            <td>{exp.paid ? "OK" : "Pending"}</td>
            <td>{exp.note}</td>
          </tr>
        ))}
        <tr className={styles.bodyRow}>
          <td>
            <strong>Total</strong>
          </td>
          <td>
            <strong>
              {expenses.reduce((sum, exp) => sum + exp.amount, 0).toFixed(2)}€
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
