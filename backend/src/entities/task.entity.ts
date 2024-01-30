import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TaskStatus } from '../tasks/task-status.enum';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  status: TaskStatus;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}
