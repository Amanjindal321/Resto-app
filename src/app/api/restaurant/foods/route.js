// import { connectionStr } from "@/app/lib/db";
// import { foodSchema } from "@/app/lib/foodsModel";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";



// export async function POST(request){
//     const payload=await request.json();
//     let success=false;
//     await mongoose.connect(connectionStr);
//     const food=new foodSchema(payload);
//     const result=await food.save();
//     if(result){
//         success=true
//     }
//     return NextResponse.json({result, success})
    
// }






import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// ✅ Function to add CORS headers
function setCORSHeaders(response) {
    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set("Access-Control-Allow-Origin", "https://resto-mp4ekiew9-aman-jindals-projects.vercel.app"); // ✅ Update with frontend URL
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return response;
}

// ✅ Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
    return setCORSHeaders(new NextResponse(null, { status: 204 }));
}

// ✅ POST request handler
export async function POST(request) {
    const payload = await request.json();
    let success = false;
    await mongoose.connect(connectionStr);
    const food = new foodSchema(payload);
    const result = await food.save();
    if (result) {
        success = true;
    }

    const response = NextResponse.json({ result, success });
    return setCORSHeaders(response);
}
