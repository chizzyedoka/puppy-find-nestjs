import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

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
  createUser(
    @Body() user: { name: string; email: string; userType: 'buyer' | 'seller' },
  ) {
    return this.userService.createUser(user);
  }

  @Patch(':id') // PATCH /users/:id
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
      userType?: 'buyer' | 'seller';
    },
  ) {
    return this.userService.update(+id, userUpdate);
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
