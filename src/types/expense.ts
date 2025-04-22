export type ExpenseCategory = 'Rent' | 'Groceries' | 'Bills' | 'Transport' | 'Others';

export interface Expense {
  id: string;
  category: ExpenseCategory;
  amount: number;
  date: string; // ISO format: YYYY-MM-DD
  paid: boolean;
  note?: string;
}