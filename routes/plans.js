
const plansCtrl = require('../controllers/plans');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', plansCtrl.index);
// Use ensureLoggedIn middleware to protect routes
router.get('/new', ensureLoggedIn, plansCtrl.new);
router.get('/:id', plansCtrl.show);
router.post('/', ensureLoggedIn, plansCtrl.create);
