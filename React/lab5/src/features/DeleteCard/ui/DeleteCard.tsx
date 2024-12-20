import { useDeleteTaskMutation } from "../../../entities/task/api/taskApi";
import { Button } from "../../../shared/Button";
import { DeleteCardProps } from "../types/DeleteCardTypes";

function DeleteCard(props: DeleteCardProps) {
  const [deleteTask] = useDeleteTaskMutation();

  return (
    <Button 
      onClick={() => deleteTask(props.id)} 
      label="Delete task"  
    />
  )
}

export default DeleteCard
