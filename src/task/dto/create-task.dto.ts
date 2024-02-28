import { Task } from '../entities/task.entity';
import { TaskStatus } from '../enums/task.enum';

export class CreateTaskDto implements Omit<Task, 'id'> {
  title: string;
  description: string;
  status: TaskStatus;
}
