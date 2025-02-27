// import { connectionStr } from "@/app/lib/db";
// import { restaurantSchema } from "@/app/lib/restaurantsModel";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export async function GET(){
//     await mongoose.connect(connectionStr);
//     const data=await restaurantSchema.find()
//     console.log(data);
//     return NextResponse.json({result:data})
// }

// export async function POST(request){
//     let payload=await request.json();
//     let result;
//     let success=false;
//     await mongoose.connect(connectionStr)

//     if(payload.login){
//         result=await restaurantSchema.findOne({email:payload.email, 
//         password:payload.password})
//         if(result){
//             success=true;
//         }
//     }else{
//         const restaurant = new restaurantSchema(payload)
//         result=await restaurant.save();
//         if(result){
//             success=true
//         }
//     }

//     //const restaurant=new restaurantSchema(payload)
    
//     return NextResponse.json({result, success})
// }






import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

//  Function to add CORS headers
function setCORSHeaders(response) {
    response.headers.set("Access-Control-Allow-Credentials", "true");
    // response.headers.set("Access-Control-Allow-Origin", "https://resto-mp4ekiew9-aman-jindals-projects.vercel.app"); //  Update with your frontend URL
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return response;
}

//  Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
    return setCORSHeaders(new NextResponse(null, { status: 204 }));
}

//  GET method
export async function GET() {
    await mongoose.connect(connectionStr);
    const data = await restaurantSchema.find();
    console.log(data);

    const response = NextResponse.json({ result: data });
    return setCORSHeaders(response);
}

//  POST method
export async function POST(request) {
    let payload = await request.json();
    let result;
    let success = false;
    await mongoose.connect(connectionStr);

    if (payload.login) {
        result = await restaurantSchema.findOne({ email: payload.email, password: payload.password });
        if (result) {
            success = true;
        }
    } else {
        const restaurant = new restaurantSchema(payload);
        result = await restaurant.save();
        if (result) {
            success = true;
        }
    }

    const response = NextResponse.json({ result, success });
    return setCORSHeaders(response);
}
