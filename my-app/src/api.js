const baseUrl = 'https://jsonplaceholder.typicode.com';

export async function fetchTodos() {
  const res = await fetch(`${baseUrl}/todos?_limit=10`);
  if (!res.ok) throw new Error('Ошибка при загрузке задач');
  return res.json();
}

export async function addTodoApi(newTodo) {
  const res = await fetch(`${baseUrl}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo),
  });
  if (!res.ok) throw new Error('Ошибка при создании');
  return res.json();
}

export async function toggleTodoApi(todo) {
  const res = await fetch(`${baseUrl}/todos/${todo.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: !todo.completed }),
  });
  if (!res.ok) throw new Error('Ошибка при обновлении');
  return res.json();
}

export async function deleteTodoApi(id) {
  const res = await fetch(`${baseUrl}/todos/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Ошибка при удалении');
  return { id };
}
