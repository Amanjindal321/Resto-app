// import { connectionStr } from "@/app/lib/db";
// import { foodSchema } from "@/app/lib/foodsModel";
// import { restaurantSchema } from "@/app/lib/restaurantsModel";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export async function GET(request, content) {
//     console.log(content.params.id)
//     const id=content.params.id;
//     await mongoose.connect(connectionStr);
//     const details=await restaurantSchema.findOne({_id:id})
//     const foodItems=await foodSchema.find({resto_id:id})
//     return NextResponse.json({success:true,details,foodItems})

// }





import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params; // Extract restaurant ID from URL
    console.log("Fetching restaurant details for ID:", id);

    try {
        await mongoose.connect(connectionStr);

        const details = await restaurantSchema.findOne({ _id: id });
        const foodItems = await foodSchema.find({ resto_id: id });

        if (!details) {
            return setCors(NextResponse.json({ success: false, message: "Restaurant not found" }, { status: 404 }));
        }

        return setCors(NextResponse.json({ success: true, details, foodItems }));
    } catch (error) {
        console.error("Error fetching restaurant data:", error);
        return setCors(NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 }));
    }
}

// Handle Preflight CORS Requests
export function OPTIONS() {
    return setCors(new NextResponse(null, { status: 204 }));
}

// Function to Add CORS Headers
function setCors(response) {
    response.headers.set("Access-Control-Allow-Origin", "*"); // Change "*" to your frontend domain if needed
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
}
