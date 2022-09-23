const router = require('express').Router();
const { Goal, Todo } = require('../models');
// const withAuth = require('../utils/auth');

// single goal GET route
router.get('/goals/:id', async (req, res) => {
  try {
    const goalData = await Goal.findByPk(req.params.id, {
      include: [
        {
          model: Todo,
          attributes: ['id', 'todo_name', 'todo_open', 'goal_id'],
        },
      ],
    });
    // const goal = goalData.get({ plain: true });
    // //Need to make handlebar page and then put name below in render spot - DONE
    // res.render('single-goal', {
    //   ...goal,
    //   logged_in: req.session.logged_in,
    // });
    res.status(200).json(goalData);
  } catch (err) {
    res.status(500).json(err);
  }
});





router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
