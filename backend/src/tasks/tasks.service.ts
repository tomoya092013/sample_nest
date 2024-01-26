import { v4 as uuid } from 'uuid';

import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findById(id: number): Task {
    const foundTask = this.tasks.find((task) => task.id === id);
    if (!foundTask) {
      throw new NotFoundException('ないよー');
    }
    return foundTask;
  }

  create(createTaskDto: CreateTaskDto): Task {
    const task = {
      ...createTaskDto,
      id: uuid(),
      status: TaskStatus.IN_PROGRESS,
    };

    this.tasks.push(task);
    return task;
  }

  update(id: number): Task {
    const task = this.findById(id);
    task.status = TaskStatus.DONE;
    return task;
  }

  delete(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
