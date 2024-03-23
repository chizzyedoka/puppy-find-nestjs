import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'chizzy',
      email: 'chizzy@gmail.com',
      userType: 'seller',
    },
    {
      id: 2,
      name: 'tola',
      email: 'tola@gmail.com',
      userType: 'buyer',
    },
    {
      id: 3,
      name: 'obinna',
      email: 'obinna@gmail.com',
      userType: 'seller',
    },
    {
      id: 4,
      name: 'tolu',
      email: 'tolu@gmail.com',
      userType: 'buyer',
    },
  ];

  findAllUsers(type?: 'buyer' | 'seller') {
    if (type) {
      return this.users.filter((user) => user.userType === type);
    }
    return this.users;
  }

  findOneUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) return 'Not Found';
    return user;
  }

  createUser(user: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = { id: usersByHighestId[0].id + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUser: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    return this.findOneUser(id);
  }

  delete(id: number) {
    const removedUser = this.findOneUser(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
