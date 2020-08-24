const express = require('express');
const crud = require('./crud.routes');

const router = express.Router();

router.use('/crud', crud);

module.exports = router;