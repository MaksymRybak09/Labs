import * as yup from 'yup';

export const schema = yup.object().shape({
  title: yup.string().required("Title is required").min(3, "Title must be at least 3 characters"),
  description: yup.string().required("Description is required").min(10, "Description must be at least 10 characters"),
  dueDate: yup.date().required("Due date is required").min(new Date(), "Due date cannot be in the past"),
});