import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr);
    let result=await restaurantSchema.find();
    result = result.map((item)=>item.city);

    result=[...new Set(result.map((item)=>item))]
    return NextResponse.json({success:true, result}),
    {                                                   //change 13 to19
        headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*", // Allow all origins (for development)
                        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                    },
    }
}


// export async function GET(req) {
//     return new Response(JSON.stringify({ message: "Locations found!" }), {
//         headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*", // Allow all origins (for development)
//             "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
//         },
//     });
// }



// export async function OPTIONS(req) {
//     return new Response(null, {
//         status: 204,
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
//             "Access-Control-Allow-Headers": "Content-Type, Authorization",
//         },
//     });
// }

