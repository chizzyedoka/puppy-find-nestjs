import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  // constructor(private userService: UserService) {}
  @Get() // GET /users
  findAllUsers(): [] {
    return [];
  }

  // GET /users/:id
  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  findOneAndUpdate(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /users/:id
  findAndDelete(@Param('id') id: string) {
    return { id };
  }
}
