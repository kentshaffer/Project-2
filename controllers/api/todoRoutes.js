const router = require('express').Router();
const { Todo } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newtodo = await Todo.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newtodo);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;