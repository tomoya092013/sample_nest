import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
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
  findById(@Param('id', ParseUUIDPipe) id: number): Task {
    return this.tasksService.findById(id);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.create(createTaskDto);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: number): Task {
    return this.tasksService.update(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: number) {
    this.tasksService.delete(id);
  }
}
