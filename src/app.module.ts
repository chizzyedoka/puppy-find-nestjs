import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerController } from './seller/seller.controller';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://Chisom:Youngmullerbaby48@cluster1.ogzzhfc.mongodb.net/puppy-find?retryWrites=true&w=majority&appName=cluster1',
    ),
    SellerModule,
  ],
  controllers: [AppController, UsersController, SellerController],
  providers: [AppService, UsersService],
})
export class AppModule {}
