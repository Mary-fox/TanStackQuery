import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodoApi } from '../../api';
import { Wrapper, Input, AddButton } from './AddTodo.styles';


const AddTodo = () => {

  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTodo) => addTodoApi(newTodo),
    onSuccess: (newTodoFromServer) => {
      queryClient.setQueryData(['todos'], (old) => [...(old || []), newTodoFromServer]);
      setTitle('');
    },
  });

  const handleAdd = () => {
    if (!title.trim()) return;

    mutation.mutate({ title: title.trim(), completed: false, isLocal: true });
  };

  return (
    <Wrapper>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Новая задача"
      />

      <AddButton onClick={handleAdd} disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Добавление...' : 'Добавить'}
      </AddButton>
    </Wrapper>
  );
}
export default AddTodo;