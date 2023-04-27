import { Injectable } from '@nestjs/common';
import { CreateTaskDTO, UpdateTaskDTO } from './tasks.dto';

@Injectable()
export class TasksService {
  create(createTaskDto: CreateTaskDTO) {
    return 'This action adds a new task';
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: string) {
    return `This action returns a #${id} task`;
  }

  update(id: string, updateTaskDto: UpdateTaskDTO) {
    return `This action updates a #${id} task`;
  }

  remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
