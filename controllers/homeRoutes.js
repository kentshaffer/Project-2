const router = require('express').Router();
const { Goal, Todo } = require('../models');
// const withAuth = require('../utils/auth');

// single goal GET route
router.get('/goals/:id', async (req, res) => {
  try {
    const goalData = await Goal.findByPk(req.params.id, {
      include: [{ model: Todo }],
      attributes: {
        include: [
          [
            sequelize.literal(
              '(SELECT * FROM todo WHERE todo.goal_id = goal.id)'
            ),
          ],
          // I'm not 100% certain this is the correct location for this
          'todo_name',
        ],
      },
    });
    const goal = goalData.get({ plain: true });
    //Need to make handlebar page and then put name below in render spot - DONE
    res.render('single-goal', {
      ...goal,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
