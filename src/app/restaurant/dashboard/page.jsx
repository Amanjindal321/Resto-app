"use client"
import AddFoodItem from "@/app/_components/AddFoodItem";
import FoodItemList from "@/app/_components/FoodItemList";
import Header from "@/app/_components/Header";
import { useState } from "react";

const Dashboard=()=>{
    const [addItem, setAddItem]=useState(false);
    return(

        <main>
        <Header/>
        <div className="text-center mt-5">
            <button onClick={()=>setAddItem(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add Food Item</button>

            <button onClick={()=>setAddItem(false)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-10">Dashboard</button>
            </div>

        <div className="text-center  mt-5">
            
            {/* <h1>Welcome to the dashboard</h1> */}
            
            {
                addItem ? <AddFoodItem/> : <FoodItemList/>
            }
        </div>
        </main>
    )
}

export default Dashboard;