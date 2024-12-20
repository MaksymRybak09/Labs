import { TaskForm } from "../../../entities/TaskForm";
import { useAddTaskMutation } from "../../../entities/task/api/taskApi";

function AddTaskWidget() {
  const [addTask] = useAddTaskMutation();

  return (
    <div>
      <h1>Add task</h1>
      <TaskForm handleSubmit={addTask}/>
    </div>
  )
}

export default AddTaskWidget
