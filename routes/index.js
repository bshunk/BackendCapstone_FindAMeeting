'use strict';

// requirements and variable declarations
const { Router } = require('express');
const router = Router();

router.use(require('./auth'));
router.use(require('./meetings'));

module.exports = router;