// import { connectionStr } from "@/app/lib/db";
// import { restaurantSchema } from "@/app/lib/restaurantsModel";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export async function GET(request) {
//     let queryParams=request.nextUrl.searchParams
//     console.log(queryParams.get('restaurant'));
//     let filter={}
//     if(queryParams.get("location")){
//         let city=queryParams.get("location");
//         filter={city:{$regex:new RegExp(city, 'i')}}
//     }else if(queryParams.get("restaurant")){
//         let name=queryParams.get("restaurant");
//         filter={restaurantName:{$regex:new RegExp(name, 'i')}}
//     }

//     try {
//         await mongoose.connect(connectionStr);
//         let result = await restaurantSchema.find(filter);
//         return NextResponse.json({ success: true, result });
//       } catch (error) {
//         console.error("Error fetching restaurants:", error);
//         return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
//       }


//     // await mongoose.connect(connectionStr)
//     // let result=await restaurantSchema.find(filter)
//     // return NextResponse.json({success:true, result})
// }




// // export default function handler(req, res) {
// //   res.setHeader("Access-Control-Allow-Credentials", true);
// //   res.setHeader("Access-Control-Allow-Origin", "https://resto-app-six.vercel.app");
// //   res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT, DELETE");
// //   res.setHeader("Access-Control-Allow-Headers", "Content-Type");

// //   // Handle preflight request for CORS
// //   if (req.method === "OPTIONS") {
// //       res.status(200).end();
// //       return;
// //   }

// //   res.json({ success: true, details: { phone: "1234567890" }, foodItems: [] });
// // }




import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
    let queryParams = request.nextUrl.searchParams;
    let filter = {};

    if (queryParams.get("location")) {
        let city = queryParams.get("location");
        filter = { city: { $regex: new RegExp(city, "i") } };
    } else if (queryParams.get("restaurant")) {
        let name = queryParams.get("restaurant");
        filter = { restaurantName: { $regex: new RegExp(name, "i") } };
    }

    try {
        await mongoose.connect(connectionStr);
        let result = await restaurantSchema.find(filter);
        const response = NextResponse.json({ success: true, result });

        //  Set CORS Headers
        response.headers.set("Access-Control-Allow-Origin", "*");
        response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type");

        return response;
    } catch (error) {
        console.error("Error fetching restaurants:", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}

//  Handle Preflight Requests (CORS OPTIONS method)
export function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
}