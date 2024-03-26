import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(30)
  password: string;

  @IsEnum(['buyer', 'seller'], {
    message: 'type: ["buyer" or "seller"] is required',
  })
  type: 'buyer' | 'seller';

  @IsString()
  @IsNotEmpty()
  @MaxLength(11)
  @MinLength(11)
  phoneNumber: number;
}
