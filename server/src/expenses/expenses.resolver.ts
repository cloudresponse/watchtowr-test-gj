import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExpensesService } from './expenses.service';
import { Expense } from './entities/expense.entity';
import { CreateExpenseInput } from './dto/create-expense.input';
import { UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
class PaginationArgs {
  @Field(() => Int, { defaultValue: 10 })
  limit: number;

  @Field(() => Int, { defaultValue: 0 })
  offset: number;
}

@Resolver(() => Expense)
export class ExpensesResolver {
  constructor(private readonly expensesService: ExpensesService) {}

  /**
   * Creates a new expense record
   * @param createExpenseInput - The expense data to create
   * @returns The newly created expense
   * @throws BadRequestException if input validation fails
   */
  @Mutation(() => Expense, { name: 'createExpense' })
  @UsePipes(ValidationPipe)
  createExpense(
    @Args('createExpenseInput', { type: () => CreateExpenseInput })
    createExpenseInput: CreateExpenseInput,
  ): Expense {
    try {
      return this.expensesService.create(createExpenseInput);
    } catch (error) {
      throw new Error(
        `Failed to create expense: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  /**
   * Retrieves all expenses with pagination support
   * @param paginationArgs - Pagination parameters (limit and offset)
   * @returns An array of expenses
   */
  @Query(() => [Expense], { name: 'expenses' })
  findAll(@Args() { limit, offset }: PaginationArgs): Expense[] {
    try {
      const allExpenses = this.expensesService.findAll();
      return allExpenses.slice(offset, offset + limit);
    } catch (error) {
      throw new Error(
        `Failed to fetch expenses: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  /**
   * Retrieves a single expense by ID
   * @param id - The ID of the expense to retrieve
   * @returns The requested expense
   * @throws NotFoundException if expense is not found
   */
  @Query(() => Expense, { name: 'expense' })
  findOne(@Args('id', { type: () => String }) id: string): Expense {
    try {
      const expense = this.expensesService.findOne(id);
      if (!expense) {
        throw new Error(`Expense with ID ${id} not found`);
      }
      return expense;
    } catch (error) {
      throw new Error(
        `Failed to fetch expense: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  /**
   * Removes an expense by ID
   * @param id - The ID of the expense to remove
   * @returns The removed expense
   * @throws NotFoundException if expense is not found
   */
  @Mutation(() => Expense)
  removeExpense(@Args('id', { type: () => String }) id: string): Expense {
    try {
      return this.expensesService.remove(id);
    } catch (error) {
      throw new Error(
        `Failed to remove expense: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }
}
