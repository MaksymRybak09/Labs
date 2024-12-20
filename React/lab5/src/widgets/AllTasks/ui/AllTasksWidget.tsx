import { TaskCard } from "../../../entities/task";
import { useGetTasksQuery } from "../../../entities/task/api/taskApi";
import { DeleteCard } from "../../../features/DeleteCard";

function AllTasksWidget() {
  const { data: tasks, isLoading } = useGetTasksQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>All Tasks</h1>
      <div>
        {tasks && tasks.map((task) => (
          <TaskCard 
            key={task.id} 
            task={task} 
            actions={[<DeleteCard id={task.id} />]} 
          />
        ))}
      </div>
    </div>
  );
}

export default AllTasksWidget;
