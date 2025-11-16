import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleTodoApi, deleteTodoApi } from '../../api';
import {
  Wrapper,
  Title,
  Sub,
  DeleteButton,
} from './TodoItem.styles';


const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();

  const toggleMutation = useMutation({
    mutationFn: () => {
      if (todo.isLocal) {
        return Promise.resolve({ ...todo, completed: !todo.completed });
      }
      return toggleTodoApi(todo);
    },
    onSuccess: (updatedTodo) => {
      queryClient.setQueryData(['todos'], (old) =>
        old.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
      );
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteTodoApi(todo.id),
    onSuccess: () => {
      queryClient.setQueryData(['todos'], (old) =>
        old.filter((t) => t.id !== todo.id)
      );
    },
  });

  return (
    <Wrapper>
      <input
        type="checkbox"
        checked={!!todo.completed}
        onChange={() => toggleMutation.mutate()}
      />

      <div style={{ flex: 1 }}>
        <Title completed={todo.completed}>{todo.title}</Title>
        <Sub>id: {todo.id}</Sub>
      </div>

      <DeleteButton
        onClick={() => deleteMutation.mutate()}
        disabled={deleteMutation.isLoading}
      >
        {deleteMutation.isLoading ? 'Удаление...' : 'Удалить'}
      </DeleteButton>
    </Wrapper>
  );
}
export default TodoItem;