const router = require('express').Router();
const { Todo } = require('../../models');
// const withAuth = require('../../utils/auth');
router.post('/updateTodos', async (req, res) => {
  try {
    let goal = req.body.goal;
    let todoArray = req.body.todos;
    for (const todo of todoArray) {
      await Todo.create({
        goal_id: goal,
        todo_name: todo,
      });
    }

    res.status(200);
  } catch (error) {
    res.json(error);
  }
});
router.post('/', async (req, res) => {
  try {
    const newtodo = await Todo.create({
      ...req.body,
      // user_id: req.session.user_id,
    });

    res.status(200).json(newtodo);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Todo.update(req.body, {where: {id: req.params.id}}).then(todoData => res.json(todoData)).catch(err => res.json(err));
});



// router.put('/:id', async (req, res) => {
//   Todo.findByPk(req.params.id).then(todoData => {
//     var todo = todoData.get({ plain: true });
//     console.log(todo);
//   });
// });

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

module.exports = router;
