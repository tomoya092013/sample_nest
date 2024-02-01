import { Repository } from 'typeorm';

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Task } from '../entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      const { name } = createTaskDto;
      const task = this.taskRepository.create({
        name,
        status: TaskStatus.IN_PROGRESS,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await this.taskRepository.save(task);
      return task;
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async find(id: string): Promise<Task> {
    const foundTask = await this.taskRepository.findOneBy({ id });
    if (!foundTask) {
      throw new NotFoundException();
    }
    return foundTask;
  }

  async updateTask(id: string): Promise<Task> {
    const foundTask = await this.taskRepository.findOneBy({ id });
    if (!foundTask) {
      throw new NotFoundException();
    }
    const updatedTask = await this.taskRepository.create({
      ...foundTask,
      status: TaskStatus.DONE,
      updatedAt: new Date(),
    });
    await this.taskRepository.save(updatedTask);
    return updatedTask;
  }

  async delete(id: string): Promise<string> {
    const foundTask = await this.taskRepository.findOneBy({ id });
    if (!foundTask) {
      throw new NotFoundException();
    }
    await this.taskRepository.remove(foundTask);
    return '削除に成功しました';
  }
}
