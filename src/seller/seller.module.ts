import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/User.schema';
import { Seller, SellerSchema } from 'src/schemas/Sellers.schema';
import { SellerController } from './seller.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Seller.name,
        schema: SellerSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  //providers: [SellerService],
  controllers: [SellerController],
})
export class SellerModule {}
