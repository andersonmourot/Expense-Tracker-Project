const router = require('express').Router();
const Newexpense = require('../../models/Newexpense');
const auth = require('../../utils/auth');

// all of these routes are prefixed with /api/expense
//Looks for a specific expense
router.post('/', auth, async (req, res) => {
  console.log(req.session.user_id);

  try {
    const expenses = await Newexpense.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    
    res.status(200).json(expenses);
  } catch (err) {
    console.log("error occured!!!", err)
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    console.log("hot here!")
    const expenseData = await Newexpense.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const expenses = expenseData.map((newexpense) => newexpense.get({ plain: true }));

    console.log("hot here!!!!", expenses)
    res.render('addexpense', { 
      expenses, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Removes a certain expense for the logged In user
router.delete('/user/:id', auth, async (req, res) => {
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

//Removes a certain expense
router.delete('/:id', auth, async (req, res) => {
  try {
    const expenseData = await Newexpense.destroy({
      where: {
        id: req.params.id,
      },
    });

    console.log("req.params.id",  Number(req.params.id))
    console.log("req.session.user_id", req.session.user_id)

    console.log("hjdkcd", expenseData)

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