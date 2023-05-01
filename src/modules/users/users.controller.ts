import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDTO, UpdateUserDTO } from './users.dto';
import { JoiValidationPipe } from 'src/common/joi.validation.pipe';
import { userSchema } from 'src/validations/users.validation';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body(new JoiValidationPipe(userSchema)) user: CreateUserDTO) {
    await this.userService.create(user);
    return {
      message: 'Berhasil membuat user',
    };
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new JoiValidationPipe(userSchema)) user: UpdateUserDTO,
  ) {
    await this.userService.update(id, user);
    return {
      message: 'User berhasil diubah',
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.userService.destroy(id);
    return { message: 'User berhasil dihapus' };
  }
}
