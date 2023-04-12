var express = require('express');
var router = express.Router();

const gym_controlers= require('../controllers/gym');
/* GET costumes */
router.get('/', gym_controlers.gym_view_all_Page );
module.exports = router;

