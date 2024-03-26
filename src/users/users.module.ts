import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/User.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Seller, SellerSchema } from 'src/schemas/Sellers.schema';
import { Buyer, BuyerSchema } from 'src/schemas/Buyers.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Seller.name,
        schema: SellerSchema,
      },
      {
        name: Buyer.name,
        schema: BuyerSchema,
      },
    ]),
  ],
  exports: [MongooseModule, UsersService],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
