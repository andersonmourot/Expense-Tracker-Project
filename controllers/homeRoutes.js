const router = require('express').Router();
const { Newexpense, User } = require('../models/Index');
const auth = require('../utils/auth');

//Launches main page on login
router.get('/', async (req, res) => {
  try {
    const expenseData = await Newexpense.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const expenses = expenseData.map((newexpense) => newexpense.get({ plain: true }));

    res.render('home', { 
      expenses, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/newexpense/:id', async (req, res) => {
  try {
    const expenseData = await Newexpense.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const expense = expenseData.get({ plain: true });

    res.render('unpaid', {
      ...expense,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Pulls up the addexpense page
router.get('/addexpense', auth, async (req, res) => {

  console.log("In Add Expense Route")
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Newexpense }],
    });

    const user = userData.get({ plain: true });
    console.log(user);

    res.render('addexpense', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Runs the login opperation
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
