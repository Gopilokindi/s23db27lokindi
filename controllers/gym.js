var gym = require('../models/gym');
// List of all Costumes
exports.gym_list = function(req, res) {
res.send('NOT IMPLEMENTED: gym list');
};
// for a specific Costume.
exports.gym_detail = function(req, res) {
res.send('NOT IMPLEMENTED: gym detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.gym_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: gym create POST');
};
// Handle Costume delete form on DELETE.
exports.gym_delete = function(req, res) {
res.send('NOT IMPLEMENTED: gym delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.gym_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: gym update PUT' + req.params.id);
};
// List of all Costumes
exports.gym_list = async function(req, res) {
    try{
    thegym = await gym.find();
    res.send(thegym);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// VIEWS
// Handle a show all view
exports.gym_view_all_Page = async function(req, res) {
    try{
        thegym = await gym.find();
    res.render('gym', { title: 'Gym Search Results', results: thegym });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle Costume create on POST.
    exports.gym_create_post = async function(req, res) {
    console.log(req.body)
    let document = new gym();
    document.Gym_name = req.body.Gym_name;
    document.Gym_Gender = req.body.Gym_Gender;
    document.Gym_Age  = req.body.Gym_Age;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific Costume.
exports.gym_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await gym.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

   // Handle Costume update form on PUT.
    exports.gym_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await gym.findById( req.params.id)
    // Do updates of properties
    if(req.body.Gym_name) toUpdate.Gym_name = req.body.Gym_name;
    if(req.body.Gym_Gender) toUpdate.Gym_Gender = req.body.Gym_Gender;
    if(req.body.Gym_Age) toUpdate.Gym_Age = req.body.Gym_Age;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
//Handle Costume delete on DELETE.
exports.gym_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await gym.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle a show one view with id specified by query
exports.gym_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await gym.findById( req.query.id)
    res.render('gymdetail',
    { title: 'GYM Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.gym_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('gymcreate', { title: 'GYM Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for updating a costume.
// query provides the id
exports.gym_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await gym.findById(req.query.id)
    res.render('gymupdate', { title: 'Gym Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle a delete one view with id from query
exports.gym_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await gym.findById(req.query.id)
    res.render('gymdelete', { title: 'GYM Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    
    


    
    
    
    
    
    
