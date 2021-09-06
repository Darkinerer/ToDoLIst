const router = require('express').Router();
const homeController = require('../controllers/homeControler');

router.get('/', homeController.index);

module.exports = router;
