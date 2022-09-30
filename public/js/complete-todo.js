const finishTodo = async (event) => {
  const todoId = event.target.parentElement.getAttribute('id');
  const response = await fetch(`/api/todo/${todoId}`, {
    method: 'PUT',
    body: JSON.stringify({
      id: todoId,
      todo_open: false,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to close todo');
  }
  console.log(todoId);
};

let completeTodoBtn = document.querySelectorAll('.complete-todo-btn'),
  i;

for (i = 0; i < completeTodoBtn.length; ++i) {
  completeTodoBtn[i].addEventListener('click', finishTodo);
}
