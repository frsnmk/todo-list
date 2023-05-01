import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { CreateUserDTO, UpdateUserDTO } from './users.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: string) {
    return await this.userRepository.findById(id);
  }

  async create(user: CreateUserDTO) {
    const isExist = await this.userRepository.findByUsername(user.username);
    if (isExist) throw new ConflictException('Username sudah digunakan!');
    await this.userRepository.create(user);
  }

  async update(id: string, user: UpdateUserDTO) {
    await this.userRepository.update(id, user);
  }

  async destroy(id: string) {
    await this.userRepository.delete(id);
  }
}
