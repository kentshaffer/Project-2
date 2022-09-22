const router = require('express').Router();
const { Goal, Todo } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/goals/:goal_id', async (req, res) => {
  try {
    const goalData = await Goal.findByPk(req.params.goal_id, {
      include: [
        {
          model: Todo,
          attributes: ['todo_name'],
        }
      ]
    });
    const goal = goalData.get({ plain: true });
    //Need to make handlebar page and then put name below in render spot
    res.render('single view handlebar name', {
      ...goal,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;