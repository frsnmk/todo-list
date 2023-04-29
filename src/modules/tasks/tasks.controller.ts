import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO, UpdateTaskDTO } from './tasks.dto';
import { Task } from 'src/databases/model/task.entity';
import { JoiValidationPipe } from 'src/common/joi.validation.pipe';
import { taskSchema } from 'src/validations/tasks.validation';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(
    @Body(new JoiValidationPipe(taskSchema)) createTaskDto: CreateTaskDTO,
  ) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body(new JoiValidationPipe(taskSchema)) updateTaskDto: UpdateTaskDTO,
  ) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }

  @Patch(':id/checklist')
  checklist(@Param('id') id: string, @Body() task: Partial<Task>) {
    return this.tasksService.checkTask(id, task);
  }
}
