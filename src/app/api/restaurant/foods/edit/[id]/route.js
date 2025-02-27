// import { connectionStr } from "@/app/lib/db";
// import { foodSchema } from "@/app/lib/foodsModel";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export async function GET(request, content){
//     const id=content.params.id;
//     let success=false;
//     await mongoose.connect(connectionStr);
//     const result=await foodSchema.findOne({_id:id})
//     if(result){   
//         success=true
//     } 
//     return NextResponse.json({result, success})
// }

// export async function PUT(request, content){
//     const id=content.params.id;
//     const payload=await request.json();
//     let success=false;
//     await mongoose.connect(connectionStr)
//     const result=await foodSchema.findOneAndUpdate({_id:id}, payload)
//     if(result){
//         success=true
//     }
//     return NextResponse.json({result, success})
// }









import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

//  Function to set CORS headers
function setCORSHeaders(response) {
    response.headers.set("Access-Control-Allow-Credentials", "true");
    // response.headers.set("Access-Control-Allow-Origin", "https://resto-mp4ekiew9-aman-jindals-projects.vercel.app"); //  Change to your frontend URL
    response.headers.set("Access-Control-Allow-Methods", "GET, PUT, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return response;
}

//  Handle OPTIONS request (for CORS preflight)
export async function OPTIONS() {
    return setCORSHeaders(new NextResponse(null, { status: 204 }));
}

//  GET request (fetch food by ID)
export async function GET(request, content) {
    const id = content.params.id;
    let success = false;
    await mongoose.connect(connectionStr);
    const result = await foodSchema.findOne({ _id: id });

    if (result) {
        success = true;
    }

    const response = NextResponse.json({ result, success });
    return setCORSHeaders(response);
}

//  PUT request (update food by ID)
export async function PUT(request, content) {
    const id = content.params.id;
    const payload = await request.json();
    let success = false;
    await mongoose.connect(connectionStr);
    const result = await foodSchema.findOneAndUpdate({ _id: id }, payload, { new: true });

    if (result) {
        success = true;
    }

    const response = NextResponse.json({ result, success });
    return setCORSHeaders(response);
}
