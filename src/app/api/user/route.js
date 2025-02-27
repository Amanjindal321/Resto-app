// import { connectionStr } from "@/app/lib/db";
// import { userSchema } from "@/app/lib/userModel";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export async function POST(request){
//     const payload=await request.json();
//     let success=false;
//     await mongoose.connect(connectionStr,{useNewUrlParser:true});
//     const user=new userSchema(payload);
//     const result= await user.save()
//     if(result){
//         success=true
//     }

//     return NextResponse.json({result,success})
// }





import { connectionStr } from "@/app/lib/db";
import { userSchema } from "@/app/lib/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const payload = await request.json();
        await mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true });

        const user = new userSchema(payload);
        const result = await user.save();

        return setCors(NextResponse.json({ success: !!result, result }));
    } catch (error) {
        console.error("Error saving user:", error);
        return setCors(NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 }));
    }
}

// Handle Preflight CORS Requests
export function OPTIONS() {
    return setCors(new NextResponse(null, { status: 204 }));
}

// Function to Set CORS Headers
function setCors(response) {
    response.headers.set("Access-Control-Allow-Origin", "https://resto-app-six.vercel.app"); // Change "*" to your frontend domain if needed
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
}

