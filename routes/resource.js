var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var gym_controller = require('../controllers/gym');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/gym', gym_controller.gym_create_post);
// DELETE request to delete Costume.
router.delete('/gym/:id', gym_controller.gym_delete);
// PUT request to update Costume.
router.put('/gym/:id', gym_controller.gym_update_put);
// GET request for one Costume.
router.get('/gym/:id', gym_controller.gym_detail);
// GET request for list of all Costume items.
router.get('/gym', gym_controller.gym_list);
module.exports = router;
