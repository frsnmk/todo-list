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

  async findOne(id: string) {
    return await this.taskRepository.findById(id);
  }

  async update(id: string, updateTaskDto: UpdateTaskDTO) {
    return await this.taskRepository.update(id, updateTaskDto);
  }

  async remove(id: string) {
    return await this.taskRepository.delete(id);
  }
}
