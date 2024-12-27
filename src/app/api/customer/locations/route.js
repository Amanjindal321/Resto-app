import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";

export async function GET(){
    await mongoose.connect(connectionStr);
    let result=await restaurantSchema
}