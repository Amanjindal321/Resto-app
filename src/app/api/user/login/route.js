// import { connectionStr } from "@/app/lib/db";
// import { userSchema } from "@/app/lib/userModel";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export async function POST(request){
//     const payload=await request.json();
//     let success=false;
//     await mongoose.connect(connectionStr,{useNewUrlParser:true});
//     const result= await userSchema.findOne({email:payload.email, password:payload.password});
//     if(result){
//         success=true;
//     }
//     return NextResponse.json({result, success})
// }







import { connectionStr } from "@/app/lib/db";
import { userSchema } from "@/app/lib/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json();
    let success = false;

    await mongoose.connect(connectionStr, { useNewUrlParser: true });

    const result = await userSchema.findOne({
        email: payload.email,
        password: payload.password,
    });

    if (result) {
        success = true;
    }

    // Set CORS headers
    const response = NextResponse.json({ result, success });
    response.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
}

// Handle CORS preflight requests
export async function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
}
