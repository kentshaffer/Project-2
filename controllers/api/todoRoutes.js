const router = require('express').Router();
const { Todo } = require('../../models');
const withAuth = require('../../utils/auth');

// Post route for updating todos, with user authorization
router.post('/updateTodos', withAuth, async (req, res) => {
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

// update route for individual todos
router.put('/:id', withAuth, (req, res) => {
  // update a category by its `id` value
  Todo.update(req.body, { where: { id: req.params.id } })
    .then((todoData) => res.json(todoData))
    .catch((err) => res.json(err));
});

module.exports = router;
