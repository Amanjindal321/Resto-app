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
import { customerSchema } from "@/app/lib/customerModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params; // Get the customer ID from the URL

    try {
        await mongoose.connect(connectionStr);
        let customer = await customerSchema.findById(id);

        if (!customer) {
            return NextResponse.json({ success: false, message: "Customer not found" }, { status: 404 });
        }

        const response = NextResponse.json({ success: true, customer });

        //  Set CORS Headers
        response.headers.set("Access-Control-Allow-Origin", "*"); // Change "*" to your frontend domain if needed
        response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type");

        return response;
    } catch (error) {
        console.error("Error fetching customer:", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}

//  Handle Preflight Requests (CORS OPTIONS method)
export function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });

    response.headers.set("Access-Control-Allow-Origin", "*"); // Change "*" to your frontend domain if needed
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
}