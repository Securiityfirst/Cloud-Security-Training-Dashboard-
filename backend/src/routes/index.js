const express = require('express');
const router = express.Router();
const { getTrainingModules } = require('../controllers');

router.get('/training-modules', getTrainingModules);

module.exports = router;


