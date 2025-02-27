// import { connectionStr } from "@/app/lib/db";
// import { restaurantSchema } from "@/app/lib/restaurantsModel";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export async function GET(){
//     await mongoose.connect(connectionStr);
//     let result=await restaurantSchema.find();
//     result = result.map((item)=>item.city);

//     result=[...new Set(result.map((item)=>item))]
//     return NextResponse.json({success:true, result})
// }



import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";

export async function GET() {
    try {
        await mongoose.connect(connectionStr);
        let result = await restaurantSchema.find();
        result = [...new Set(result.map((item) => item.city))];

        const response = NextResponse.json({ success: true, result });

        //  Set CORS Headers
        response.headers.set("Access-Control-Allow-Origin", "*");
        response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type");

        return response;
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

// Handle Preflight Requests
export function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
}