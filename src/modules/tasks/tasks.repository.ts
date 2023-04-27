import { Injectable } from '@nestjs/common';
import { Task } from 'src/databases/model/task.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class TaskRepository {
  constructor(private readonly entityManager: EntityManager) {}

  async findAll(): Promise<Task[]> {
    return this.entityManager.find(Task);
  }

  async findById(id: string): Promise<Task> {
    return this.entityManager.findOne(Task, { where: { id } });
  }
  async create(task: Task): Promise<Task> {
    return this.entityManager.save(task);
  }

  async update(id: string, task: Task): Promise<Task> {
    await this.entityManager.update(Task, id, task);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.entityManager.delete(Task, id);
  }
}
