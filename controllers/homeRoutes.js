const router = require('express').Router();
const { Goal, Todo } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
  // redners login page
  res.render('login');
});

router.get('/createGoal', withAuth, (req, res) => {
  // renders createGoal page
  try {
    res.render('createGoal');
  } catch (error) {
    res.status(500).json('hello');
  }
});

router.get('/', withAuth, (req, res) => {
  Goal.findAll({
    where: {
      user_id: req.session.user_id,
    }
  }).then((goalData) => {
    var goals = goalData.map((goal) => goal.get({ plain: true }));
    res.render('homepage', {
      goals,
      logged_in: req.session.logged_in,
    });
  });
});

// single goal GET route
router.get('/:id', withAuth, async (req, res) => {
  try {
    const goalData = await Goal.findByPk(req.params.id, {
      include: [
        {
          model: Todo,
          attributes: ['id', 'todo_name', 'todo_open', 'goal_id'],
        },
      ],
    });
    const goal = goalData.get({ plain: true });
    //Need to make handlebar page and then put name below in render spot - DONE
    res.render('single-goal', {
      ...goal,
      logged_in: req.session.logged_in,
    });
    // res.status(200).json(goalData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
