import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../types/TaskTypes";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => 'tasks',
      providesTags: ['Tasks'],
    }),
    addTask: builder.mutation<Task, Task>({
      query: (task) => ({
        url: 'tasks',
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTask: builder.mutation<void, string>({
      query: (taskID) => ({
        url: `tasks/${taskID}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
    updateTask: builder.mutation<Task, { TaskID: string; updatedTask: Partial<Task>}>({
      query: ({TaskID, ...updatedTask}) => ({
        url: `tasks/${TaskID}`,
        method: 'PATCH',
        body: updatedTask,
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = taskApi;