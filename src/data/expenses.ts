import { Expense } from '@/types/expense';

export const expenses: Expense[] = [
  {
    id: '1',
    category: 'Rent',
    amount: 500,
    date: '2025-04-01',
    note: 'Monthly rent',
  },
  {
    id: '2',
    category: 'Groceries',
    amount: 250,
    date: '2025-04-05',
    note: 'Weekly grocery run',
  },
  {
    id: '3',
    category: 'Bills',
    amount: 150,
    date: '2025-04-07',
    note: 'Electricity + Internet',
  },
  {
    id: '4',
    category: 'Transport',
    amount: 27,
    date: '2025-04-10',
    note: 'Metro card top-up',
  },
  {
    id: '5',
    category: 'Others',
    amount: 10,
    date: '2025-04-12',
    note: 'Coffee and snacks',
  },
  {
    id:'6',
    category: 'Others',
    amount: 200,
    date: '2025-04-13',
    note: 'Life Insurance'
  }
];