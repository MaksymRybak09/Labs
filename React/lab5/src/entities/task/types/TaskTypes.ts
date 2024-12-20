import { ReactNode } from "react"

export type Task = {
  id: string,
  title: string,
  description: string,
  dueDate: Date,
  isFavorite: boolean,
  isSaved: boolean,
}

export type TaskCardProps = {
  task: Task,
  actions?: ReactNode[],
}
