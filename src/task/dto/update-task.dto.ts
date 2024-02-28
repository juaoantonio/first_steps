import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { TaskStatus } from '../enums/task.enum';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  title: string;
  description: string;
  status: TaskStatus;
}
