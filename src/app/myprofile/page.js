'use client'
import { useEffect, useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";

const Page=()=>{
    const [myOrders,setMyOrders]=useState([]);
    useEffect(()=>{
        getMyOrders();
    },[])

    const getMyOrders=async()=>{
        const userStorage=JSON.parse(localStorage.getItem('user'));
        let response=await fetch('http://localhost:3000/api/order?id='+userStorage._id)
        response=await response.json();
        if(response.success){
            setMyOrders(response.result)
        }
    }
    // console.log(myOrders);

    return(
       
        <div>
            <CustomerHeader />
            {
                myOrders.map((item,index)=>(
                <div key={item._id || index} className="restaurant-wrapper"style={{marginLeft:'auto',marginRight:'auto'}}>
                    <h4 className="font-bold pb-3">Restaurants: {item.data.restaurantName}</h4>
                    <div>Amount: {item.amount}</div>
                    <div>Address: {item.data.address}</div>
                    <div>Status: {item.status}</div>
                </div>))
            }
            {/* <Footer/> */}
        </div>
        
        
    )
}
export default Page;