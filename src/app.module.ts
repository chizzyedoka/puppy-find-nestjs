import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://Chisom:Youngmullerbaby48@cluster1.ogzzhfc.mongodb.net/puppy-find?retryWrites=true&w=majority&appName=cluster1',
    ),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
//mongodb+srv://Chisom:<password>@cluster1.ogzzhfc.mongodb.net/?retryWrites=true&w=majority&appName=cluster1
