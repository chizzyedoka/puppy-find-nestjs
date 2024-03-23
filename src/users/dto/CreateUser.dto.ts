import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['buyer', 'seller'], {
    message: 'UserType required',
  })
  userType: 'buyer' | 'seller';
}
