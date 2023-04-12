const mongoose = require("mongoose")
const gymSchema = mongoose.Schema({
Gym_name: String,
Gym_Gender: String,
Gym_Age: Number
})
module.exports = mongoose.model("gym",gymSchema)