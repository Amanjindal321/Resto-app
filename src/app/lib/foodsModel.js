// const { default: mongoose } = require("mongoose");

// const foodModel=new mongoose.Schema({
//     name:String,
//     price:String,
//     path:String,
//     description:String,
//     resto_id:mongoose.Schema.Types.ObjectId
// });

// export const foodSchema=mongoose.models.foods || mongoose.model("foods",foodModel)


import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    path:String,
    description:String,
    resto_id: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
});

export default mongoose.models.foods || mongoose.model("foods", foodSchema);