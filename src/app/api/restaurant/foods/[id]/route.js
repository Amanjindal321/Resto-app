// import {connectionStr} from "@/app/lib/db";
// import { foodSchema } from "@/app/lib/foodsModel";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";


// export async function GET(request, content){
//     const id=content.params.id
//     let success=false;
//     await mongoose.connect(connectionStr)
//     const result=await foodSchema.find({resto_id:id});
//     if(result){
//         success=true;
//     }
//     return NextResponse.json({result, success})
// }

// export async function DELETE(request, content){
//     const id=content.params.id;
//     let success=false;
//     await mongoose.connect(connectionStr);
//     const result=await foodSchema.deleteOne({_id:id})
//     if(result.deletedCount>0){
//         success=true
//     }
//     return NextResponse.json({result, success})
// }






import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// ✅ Function to set CORS headers
function setCORSHeaders(response) {
    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set("Access-Control-Allow-Origin", "https://resto-mp4ekiew9-aman-jindals-projects.vercel.app"); // Change to your frontend URL
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return response;
}

// ✅ Handle OPTIONS request (for CORS preflight)
export async function OPTIONS() {
    return setCORSHeaders(new NextResponse(null, { status: 204 }));
}

// ✅ GET request (fetch food items by restaurant ID)
export async function GET(request, content) {
    const id = content.params.id;
    let success = false;
    await mongoose.connect(connectionStr);
    const result = await foodSchema.find({ resto_id: id });

    if (result) {
        success = true;
    }

    const response = NextResponse.json({ result, success });
    return setCORSHeaders(response);
}

// ✅ DELETE request (delete food item by ID)
export async function DELETE(request, content) {
    const id = content.params.id;
    let success = false;
    await mongoose.connect(connectionStr);
    const result = await foodSchema.deleteOne({ _id: id });

    if (result.deletedCount > 0) {
        success = true;
    }

    const response = NextResponse.json({ result, success });
    return setCORSHeaders(response);
}
