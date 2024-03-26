import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/User.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // check if User in database
    const user = await this.userModel.findOne({ email: createUserDto.email });
    if (user) {
      throw new HttpException(
        'User already exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    // create user if not found
    const createdUser = new this.userModel(createUserDto);
    await createdUser.save();
    return createdUser;
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    // check if User in database
    // ToDo - ensure users can't change their email and username
    const user = await this.userModel.findOneAndUpdate(
      { email },
      updateUserDto,
      { new: true },
    );
    if (!user) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async delete(username: string) {
    const removedUser = await this.userModel.findOneAndDelete({ username });
    if (!removedUser) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    return removedUser;
  }
}
