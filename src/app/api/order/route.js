// import { connectionStr } from "@/app/lib/db";
// import { orderSchema } from "@/app/lib/ordersModel";
// import { restaurantSchema } from "@/app/lib/restaurantsModel";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export async function POST(request){
//     const payload=await request.json();
//     await mongoose.connect(connectionStr,{useNewUrlParser:true})
//     let success=false;
//     const orderObj=new orderSchema(payload);
//     const result=await orderObj.save();
//     if(result){
//         success=true
//     }
//     return NextResponse.json({result,success})
// }


// export async function GET(request){
//     const userId=request.nextUrl.searchParams.get('id');
//     let success=false
//     await mongoose.connect(connectionStr,{useNewUrlParser:true})
//     let result=await orderSchema.find({user_id:userId});
//     if(result){
//         let restoData=await Promise.all(
//             result.map(async (item)=>{
//                 let restoInfo={};
//                 restoInfo.data=await restaurantSchema.findOne({_id:item.resto_id})
//                 restoInfo.amount=item.amount;
//                 restoInfo.status=item.status;
//                 return restoInfo;
//             })
//         )
//         result=restoData;
//         success=true
//     }
    
//     return NextResponse.json({result,success})
// }





import { connectionStr } from "@/app/lib/db";
import { orderSchema } from "@/app/lib/ordersModel";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const payload = await request.json();
        await mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true });

        const orderObj = new orderSchema(payload);
        const result = await orderObj.save();
        return setCors(NextResponse.json({ success: !!result, result }));
    } catch (error) {
        console.error("Error saving order:", error);
        return setCors(NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 }));
    }
}

export async function GET(request) {
    try {
        const userId = request.nextUrl.searchParams.get('id');
        await mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true });

        let result = await orderSchema.find({ user_id: userId });

        if (result.length > 0) {
            let restoData = await Promise.all(
                result.map(async (item) => {
                    let restoInfo = {};
                    restoInfo.data = await restaurantSchema.findOne({ _id: item.resto_id });
                    restoInfo.amount = item.amount;
                    restoInfo.status = item.status;
                    return restoInfo;
                })
            );

            return setCors(NextResponse.json({ success: true, result: restoData }));
        }

        return setCors(NextResponse.json({ success: false, message: "No orders found" }, { status: 404 }));
    } catch (error) {
        console.error("Error fetching orders:", error);
        return setCors(NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 }));
    }
}

// Handle Preflight CORS Requests
export function OPTIONS() {
    return setCors(new NextResponse(null, { status: 204 }));
}

// Function to Set CORS Headers
function setCors(response) {
    response.headers.set("Access-Control-Allow-Origin", "*"); // Change "*" to your frontend domain if needed
    response.headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
}
