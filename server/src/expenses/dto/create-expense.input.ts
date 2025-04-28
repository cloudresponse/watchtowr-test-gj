import { InputType, Field, Float } from '@nestjs/graphql';
import {
  IsString,
  IsNumber,
  IsPositive,
  IsDateString,
  Length,
  IsNotEmpty,
} from 'class-validator';

@InputType()
export class CreateExpenseInput {
  @Field(() => String, { description: 'Description of the expense' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  description: string;

  @Field(() => Float, { description: 'Amount of the expense' })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  amount: number;

  @Field(() => String, { description: 'Date of the expense' })
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @Field(() => String, { description: 'Category of the expense' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  category: string;

  @Field(() => String, { description: 'Submitted by' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  submittedBy: string;
}
