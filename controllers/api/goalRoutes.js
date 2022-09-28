const router = require('express').Router();
const { Goal, Todo } = require('../../models');
const withAuth = require('../../utils/auth');

// Post route for a new goal; includes user authorization
router.post('/', withAuth, async (req, res) => {
  try {
    const newGoal = await Goal.create({
      ...req.body.goal,
      // goal_name: req.body.goal_name,
      // goal_category: req.body.goal_category,
      user_id: req.session.user_id,
      // user_id: 1,
    });
    console.log('Hello');
    let goal_id = newGoal.id;
    // let array = [];
    console.log(goal_id);
    console.log(req.body.todos);
    for (const todo of req.body.todos) {
      await Todo.create({
        todo_name: todo,
        goal_id,
      });
      // array.push(newTodo);
    }
    // res.status(200).json(array);
    // res.status(200).json(newGoal);
    res.status(200);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, (req, res) => {
  // update a category by its `id` value
  Goal.update(req.body, { where: { id: req.params.id } })
    .then((goalData) => res.json(goalData))
    .catch((err) => res.json(err));
});

module.exports = router;
