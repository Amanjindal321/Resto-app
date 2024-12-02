"use client"
import AddFoodItem from "@/app/_components/AddFoodItem";
import Header from "@/app/_components/Header";
import { useState } from "react";

const Dashboard=()=>{
    const [addItem, setAddItem]=useState(false);
    return(

        <main>
        <Header/>

        <div className="text-center mt-5">
            
            {/* <h1>Welcome to the dashboard</h1> */}
            <div>
            <button onClick={()=>setAddItem(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add Food Item</button>

            <button onClick={()=>setAddItem(false)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-10">Dashboard</button>
            </div>
            {
                addItem ? <AddFoodItem/> : <h1 className="mt-5">Welcome to the Dashboard</h1>
            }
        </div>
        </main>
    )
}

export default Dashboard;