import { Injectable } from '@nestjs/common';

import { TaskStatus } from './task-status.enum';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findById(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }
  create(task: Task): Task {
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
