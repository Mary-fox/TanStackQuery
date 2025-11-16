import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../../api';
import TodoItem from '../TodoItem/TodoItem';
import { Wrapper, RefreshButton, List, ListItem } from './TodoList.styles';


const TodoList = () => {

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 1000 * 60,
  });

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: {error.message}</div>;

  return (
    <Wrapper>
      <RefreshButton onClick={() => refetch()}>Обновить</RefreshButton>

      <List>
        {data.map((todo) => (
          <ListItem key={todo.id}>
            <TodoItem todo={todo} />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
export default TodoList