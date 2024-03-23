export class CreateUserDto {
  name: string;
  email: string;
  userType: 'buyer' | 'seller';
}
