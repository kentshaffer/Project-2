const router = require('express').Router();
const { Goal } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.get('/', (req, res) => {
//   Goal.findAll().then(goalData => {
//     var goals = goalData.map(goal => goal.get({ plain: true}));
//     console.log(goals);
//     res.render('homepage', {
//       goals,
//       logged_in: true
//       // req.session.logged_in
//     });
//   });
// });


// router.get('/:id', (req, res) => {
//   Goal.findByPk(req.params.id).then(goalData => {
//     var goals = goalData.get({ plain: true});
//     console.log(goals);
//     res.render('goal', {
//       goals,
//       logged_in: true
//       // req.session.logged_in
//     });
//   });
// });


//Remember to re add the withAuth helper function to this after testing
router.post('/', async (req, res) => {
  try {
    const newGoal = await Goal.create({
      // ...req.body,
      goal_name: req.body.goal_name,
      goal_category: req.body.goal_category,
      // user_id: req.session.user_id,
      user_id: 1,
    });

    res.status(200).json(newGoal);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
