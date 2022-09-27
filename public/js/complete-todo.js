const finishTodo = async (event) => {
  const todoId = event.target.parentElement.getAttribute('id');
  const response = await fetch(`/api/todo/${todoId}`, {
    method: 'PUT',
    body: JSON.stringify({

      'id': todoId,
      'todo_open': false,
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


let completeTodoBtn = document.querySelectorAll('.complete-todo-btn'), i;

for(i = 0; i < completeTodoBtn.length; ++i) {
  completeTodoBtn[i].addEventListener('click', finishTodo);
}


// const completeTodoBtn = document.querySelectorAll('.complete-todo-btn');
// completeTodoBtn.forEach(function(el){
//   el.addEventListener('click', finishTodo () );
// });

// const completeTodo = async () => {
//   const response = await fetch('/api/todos/', {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//   });

// const { Todo } = require('../../models');

//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert(response.statusText);
//   }
// };

// const completeTodo = async (req, res) => {
//   try {
//     const isCompleted = await Todo.findById({ id: req.params.id }).select('isCompleted');
//     const todo = await Todo.findByIdAndUpdate({ id: req.params.id }, { isCompleted: !isCompleted });
//     return res.status(200).json({
//       success: true,
//       data: todo
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       error: 'server error'
//     });
//   }
// };

