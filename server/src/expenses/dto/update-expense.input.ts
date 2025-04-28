import { CreateExpenseInput } from './create-expense.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateExpenseInput extends PartialType(CreateExpenseInput) {
  @Field(() => String, { description: 'ID of the expense to update' })
  @IsString()
  @IsNotEmpty()
  id: string;
}
