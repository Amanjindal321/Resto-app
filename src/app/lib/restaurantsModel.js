const { default: mongoose} = require("mongoose");
const restaurantModel=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    address:String,
    city:String,
    restaurantName:String
});

export const
restaurantSchema=mongoose.models.restaurants||mongoose.model("restaurants",restaurantModel);