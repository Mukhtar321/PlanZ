const express = require('express');
const router = express.Router();
const plansCtrl = require('../controllers/plans.js');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');
// localhost:3000/plans
router.get('/', plansCtrl.index);
// Use ensureLoggedIn middleware to protect routes
// localhost:3000/plans/new
router.get('/new', ensureLoggedIn, plansCtrl.new);
router.get('/:id', plansCtrl.show);
router.post('/', ensureLoggedIn, plansCtrl.create);

module.exports = router;
