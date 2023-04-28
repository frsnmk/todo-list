import { Injectable } from '@nestjs/common';
import { CreateTaskDTO, UpdateTaskDTO } from './tasks.dto';
// import { TaskRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/databases/model/task.entity';
import { Repository } from 'typeorm';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(createTaskDto: CreateTaskDTO) {
    return this.taskRepository.create(createTaskDto);
  }

  async findAll() {
    return await this.taskRepository.findAll();
  }

  // findOne(id: string) {
  //   return `This action returns a #${id} task`;
  // }

  // update(id: string, updateTaskDto: UpdateTaskDTO) {
  //   return `This action updates a #${id} task`;
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} task`;
  // }
}
