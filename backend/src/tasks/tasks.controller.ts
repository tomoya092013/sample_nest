import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { TaskStatus } from './task-status.enum';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Task {
    return this.tasksService.findById(id);
  }

  @Post()
  create(@Body('id') id: number, @Body('name') name: string): Task {
    const task: Task = {
      id,
      name,
      status: TaskStatus.IN_PROGRESS,
    };
    return this.tasksService.create(task);
  }

  @Patch(':id')
  update(@Param('id') id: number): Task {
    return this.tasksService.update(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.tasksService.delete(id);
  }
}
