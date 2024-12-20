import { TaskCardProps } from "../types/TaskTypes";

function TaskCard(props: TaskCardProps) {
  return (
    <div className="task-card">
      <h3>{props.task.title}</h3>
      <p>{props.task.description}</p>
      <p>Due to: {(props.task.dueDate).toString()}</p>
      {props.actions}
    </div>
  )
}

export default TaskCard
