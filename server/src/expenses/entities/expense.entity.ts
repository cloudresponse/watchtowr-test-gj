import { ObjectType, Field, Float } from '@nestjs/graphql';
import {
  IsString,
  IsNumber,
  IsPositive,
  IsDate,
  Length,
  IsNotEmpty,
} from 'class-validator';

@ObjectType()
export class Expense {
  @Field(() => String, { description: 'ID of the expense' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @Field(() => String, {
    description: 'Description of the expense',
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  description: string;

  @Field(() => Float, { description: 'Amount of the expense' })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  amount: number;

  @Field(() => Date, { description: 'Created at' })
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @Field(() => String, { description: 'Category of the expense' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  category: string;

  @Field(() => Date, { description: 'Date of the expense' })
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @Field(() => String, { description: 'Submitted by' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  submittedBy: string;
}
