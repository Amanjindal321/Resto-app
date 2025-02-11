"use client"
import CustomerHeader from "@/app/_components/CustomerHeader";
import Header from "@/app/_components/Header"
import { use, useEffect, useState } from "react"

const page=(props)=>{
    const params=use(props.params); //change  const name , props.params.name
    const searchParams=use(props.searchParams);

    const name=params.name; // change  new line add
    const id=searchParams.id;

const [restaurantDetails, setRestaurantDetails]=useState();
const [foodItems, setFoodItems]=useState([])
const [cartData, setCartData]=useState()
//const [cartStorage, setCartStorage]=useState(JSON.parse(localStorage.getItem('cart')));
const [cartStorage, setCartStorage]=useState(()=>{
    if(typeof window !== "undefined"){
        return JSON.parse(localStorage.getItem('cart')) || [];
    }
    return[];
})
const [cartIds, setCartIds]=useState(cartStorage?()=>cartStorage.map((item)=>{
    return item._id
}):[])

const [removeCartData, setRemoveCartData]=useState();



    useEffect(()=>{
        loadRestaurantDetails()
    }, [])
    console.log(cartIds);

    const loadRestaurantDetails = async()=>{
        //const id=props.searchParams.id;
        console.log(id);
        let response=await fetch("http://localhost:3000/api/customer/"+id)
        response=await response.json();
        if(response.success){
            setRestaurantDetails(response.details)
            setFoodItems(response.foodItems)
        }
    }

    const addToCart=(item)=>{
        setCartData(item)
        const updatedCartIds=[...cartIds,item._id];    //{          let localCartIds=cartIds;
        setCartIds(updatedCartIds);                    // change    localCartIds.push(item.id);
        const updatedCart=[...cartStorage,item];       //           setCartIds(localCartIds)
        setCartStorage(updatedCart);                   // }
        localStorage.setItem('cart',JSON.stringify(updatedCart));
        setRemoveCartData();
    }


    const removeFromCart=(id)=>{
        setRemoveCartData(id);
        var localIds=cartIds.filter(item=>item!=id)
        setCartIds(localIds);
        setCartData();
    }

    return(
       <div>
        {/* <Header/> */}
        <CustomerHeader cartData={cartData} removeCartData={removeCartData}/>
        <div className="min-h-screen">
            <div className="bg-[url('/banner5.jpg')] bg-no-repeat bg-cover min-h-[530px] bg-slate-300 bg-blend-multiply">
            <h1 className="text-white text-2xl font-bold text-center pt-10">{decodeURI(name)}</h1>
            </div>
            <div className="bg-orange-500 flex justify-evenly p-3">
                <h3><span className=" font-bold">Phone :</span>{restaurantDetails?.phone}</h3>
                <h3><span className=" font-bold">Address :</span>{restaurantDetails?.address}</h3>
                <h3><span className=" font-bold">City :</span>{restaurantDetails?.city}</h3>
                <h3><span className=" font-bold">Email :</span>{restaurantDetails?.email}</h3>
            </div>
            <div>
                {
                    foodItems.length>0 ? foodItems.map((item, index)=>(
                        <div key={item.id || index} className="flex gap-3 border-b-4 border-orange-300 py-3 px-2">
                            <div><img width={100} src={item.path} alt="Food item"  className="w-24 h-16 object-cover rounded-md mt-1 ml-1"/></div>
                            <div>
                             <div>{item.name}</div>
                             <div>{item.price}</div>
                             <div>{item.description}</div>
                             {
                                cartIds.includes(item._id)?
                                <button className="bg-red-500 text-white px-2 py-1 cursor-pointer rounded-sm" onClick={()=>removeFromCart(item._id)}>Remove from Cart</button>
                                : <button className="bg-orange-500 text-white px-2 py-1 cursor-pointer rounded-sm" onClick={()=>addToCart(item)}>Add to Cart</button>
                             }
                            
                            </div>
                            
                        </div>
                        
                    )) : <h1 className="font-bold text-2xl text-center py-5">No Food Items Listed</h1>
                }
            </div>
        </div>
       
       </div>
        
    )
}

export default page;