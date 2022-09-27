// const completeTodo = async () => {
//   const response = await fetch('/api/todos/', {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//   });

const { Todo } = require('../../models');

//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert(response.statusText);
//   }
// };

const completeTodo = async (req, res) => {
  try {
    const isCompleted = await Todo.findById({ id: req.params.id }).select('isCompleted');
    const todo = await Todo.findByIdAndUpdate({ id: req.params.id }, { isCompleted: !isCompleted });
    return res.status(200).json({
      success: true,
      data: todo
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'server error'
    });
  }
};







let completeTodoBtn = document.querySelector('#complete-todo-btn');
completeTodoBtn.addEventListener('click', completeTodo);
