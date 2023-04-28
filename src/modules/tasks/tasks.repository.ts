import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/databases/model/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDTO } from './tasks.dto';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async create(task: CreateTaskDTO): Promise<Task> {
    return await this.taskRepository.save(task);
  }
}
