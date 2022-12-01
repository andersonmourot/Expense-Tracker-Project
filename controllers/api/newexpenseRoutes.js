const router = require('express').Router();
const Newexpense = require('../../models/Newexpense');
const auth = require('../../utils/auth');

// all of these routes are prefixed with /api/expense
//Looks for a specific expense
router.post('/', auth, async (req, res) => {
  console.log("***********")
  console.log(req.body);
  console.log(req.session.user_id);
  console.log("*******")

  try {
    const Newexpense = await Newexpense.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    console.log(Newexpense);
    res.status(200).json(Newexpense);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Removes a certain expense
router.delete('/:id', auth, async (req, res) => {
  try {
    const expenseData = await Newexpense.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!expenseData) {
      res.status(404).json({ message: 'No expense found with this id!' });
      return;
    }

    res.status(200).json(expenseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;