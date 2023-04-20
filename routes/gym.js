var express = require('express');
var router = express.Router();

const gym_controlers= require('../controllers/gym');
/* GET costumes */
router.get('/', gym_controlers.gym_view_all_Page );
router.get('/gym/:id', gym_controlers.gym_detail);
router.get('/detail', gym_controlers.gym_view_one_Page);
router.get('/create', gym_controlers.gym_create_Page);
router.get('/update', gym_controlers.gym_update_Page);
router.get('/delete', gym_controlers.gym_delete_Page);

module.exports = router;

