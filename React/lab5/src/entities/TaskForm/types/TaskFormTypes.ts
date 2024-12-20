import { Task } from "../../task/types/TaskTypes";

export interface TaskFormValues {
  title: string;
  description: string;
  dueDate: Date;
}

export type FormProps = {
  handleSubmit: (task: Task) => void;
}