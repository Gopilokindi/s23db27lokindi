const mongoose = require("mongoose")
const gymSchema = mongoose.Schema({
Gym_name: {
    type:String,
    required:true,
    match:/^[a-zA-Z]+$/
},
Gym_Gender:{
    type:String,
    match:/^(male|female|MALE|FEMALE)$/
},
Gym_Age: {
   type: Number,
   min:1,
   max:50
}
})
module.exports = mongoose.model("gym",gymSchema)