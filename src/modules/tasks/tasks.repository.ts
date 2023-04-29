import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/databases/model/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDTO, UpdateTaskDTO } from './tasks.dto';

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

  async findById(id: string): Promise<Task> {
    return await this.taskRepository.findOne({ where: { id } });
  }

  async update(id: string, task: UpdateTaskDTO): Promise<Task> {
    await this.taskRepository.update(id, task);
    return await this.findById(id);
  }

  async delete(id: string): Promise<any> {
    await this.taskRepository.delete(id);
    return {
      message: 'Task deleted successfully',
    };
  }

  async checklistTask(id: string, task: Partial<Task>): Promise<any> {
    await this.taskRepository.update(id, { has_finished: task.has_finished });
  }
}
