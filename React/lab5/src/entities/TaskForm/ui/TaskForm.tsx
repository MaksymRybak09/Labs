import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema } from '../config/FormConfig';
import { FormProps, TaskFormValues } from '../types/TaskFormTypes';
import { FormInput } from '../../../shared/FormInput';
import { FormTextArea } from '../../../shared/FormTextArea';
import { Button } from '../../../shared/Button';


function TaskForm(props: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: yupResolver(schema),
  });
  
  const onSubmit = (data: TaskFormValues) => {
    const task = {
      ...data,
      id: crypto.randomUUID(),
      isFavorite: false,
      isSaved: false,
    };
    props.handleSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        id="title"
        label="Task title"
        register={register("title")}
        errors={errors["title"]}
      />
      <FormTextArea
        id="decription"
        label="Task description"
        register={register("description")}
        errors={errors["description"]}
      />
      <FormInput
        id="dueDate"
        label="Due date"
        type="date"
        register={register("dueDate")}
      />
      <Button 
        type='submit'
        label="Add task"  
      />
    </form>
  )
}

export default TaskForm
