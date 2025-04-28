import { Injectable } from '@nestjs/common';
import { CreateExpenseInput } from './dto/create-expense.input';
import { Expense } from './entities/expense.entity';
import { ulid } from 'ulid';

@Injectable()
export class ExpensesService {
  private expensesSeed: Expense[] = [
    {
      id: ulid(),
      description: 'Expense 1',
      amount: 100.76,
      createdAt: new Date(),
      date: new Date(),
      category: 'Food',
      submittedBy: 'John Doe',
    },
    {
      id: ulid(),
      description: 'Expense 2',
      amount: 15.75,
      createdAt: new Date(),
      date: new Date(),
      category: 'Transportation',
      submittedBy: 'Jane Doe',
    },
    {
      id: ulid(),
      description: 'Expense 3',
      amount: 1000.01,
      createdAt: new Date(),
      date: new Date(),
      category: 'Entertainment',
      submittedBy: 'John Doe',
    },
  ];

  private expenses: Expense[] = this.expensesSeed;

  create(createExpenseInput: CreateExpenseInput): Expense {
    try {
      const newExpense: Expense = {
        id: ulid(),
        ...createExpenseInput,
        createdAt: new Date(),
        date: new Date(createExpenseInput.date),
      };
      this.expenses.push(newExpense);
      return newExpense;
    } catch (error) {
      throw new Error(
        `Failed to create expense: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  findAll(): Expense[] {
    try {
      return this.expenses;
    } catch (error) {
      throw new Error(
        `Failed to fetch expenses: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  findOne(id: string): Expense | null {
    try {
      return this.expenses.find((expense) => expense.id === id) || null;
    } catch (error) {
      throw new Error(
        `Failed to fetch expense: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  // update(id: number, updateExpenseInput: UpdateExpenseInput) {
  //   return `This action updates a #${id} expense`;
  // }

  remove(id: string): Expense {
    try {
      const expenseToRemove = this.expenses.find(
        (expense) => expense.id === id,
      );
      if (!expenseToRemove) {
        throw new Error(`Expense with ID ${id} not found`);
      }
      this.expenses = this.expenses.filter((expense) => expense.id !== id);
      return expenseToRemove;
    } catch (error) {
      throw new Error(
        `Failed to remove expense: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }
}
