import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    let result=await restaurantSchema.find();
    result = result.map((item)=>item.city);

    return NextResponse.json({success:true, result})
}