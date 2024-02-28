import { TaskStatus } from '../enums/task.enum';

export class Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}
