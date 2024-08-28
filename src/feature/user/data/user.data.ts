import { Expense, Income, User } from '@prisma/client';

export type UserData = User & {
  incomes?: Income;
  expenses?: Expense;
};
