var express = require('express');
var router = express.Router();

const gym_controlers= require('../controllers/gym');
/* GET costumes */
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
router.get('/', gym_controlers.gym_view_all_Page );
router.get('/gym/:id', gym_controlers.gym_detail);
router.get('/detail', gym_controlers.gym_view_one_Page);
router.get('/create',secured, gym_controlers.gym_create_Page);
router.get('/update',secured, gym_controlers.gym_update_Page);
router.get('/delete',secured, gym_controlers.gym_delete_Page);

module.exports = router;

