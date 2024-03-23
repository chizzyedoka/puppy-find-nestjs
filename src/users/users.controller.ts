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
  @Get() // GET /users?type=customer
  findAllUsers(@Query('type') type?: 'buyer' | 'seller') {
    return this.userService.findAllUsers(type);
  }

  // GET /users/:id
  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return this.userService.findOneUser(parseInt(id));
  }

  @Post() // POST /users
  createUser(@Body(ValidationPipe) user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Patch(':id') // PATCH /users/:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    userUpdate: UpdateUserDto,
  ) {
    return this.userService.update(id, userUpdate);
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
