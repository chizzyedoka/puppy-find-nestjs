import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  // @Get() // GET /users?type=customer
  // findAllUsers(@Query('type') type?: 'buyer' | 'seller') {
  //   return this.userService.findAllUsers(type);
  // }

  // // GET /users/:id
  // @Get(':id')
  // findOneUser(@Param('id') id: string) {
  //   return this.userService.findOneUser(parseInt(id));
  // }

  @Post('signup') // POST /users/signup
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':email') // PATCH /users/:email
  update(
    @Param('email') email: string,
    @Body(ValidationPipe)
    userUpdate: UpdateUserDto,
  ) {
    return this.userService.update(email, userUpdate);
  }

  @Delete(':username') // DELETE /users/:username
  delete(@Param('username') username: string) {
    return this.userService.delete(username);
  }
}
