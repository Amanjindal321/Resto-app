'use client'
import { useState,useEffect } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";
import { DELIVERY_CHARGES } from "../lib/constant";
import { TAX } from "../lib/constant";
import { useRouter } from "next/navigation";


const Page=()=>{
//     const [cartStorage,setCartStorage]=useState(JSON.parse(localStorage.getItem('cart')))
//     const [total]=useState(()=>cartStorage.length==1?cartStorage[0].price:cartStorage.reduce((a,b)=>{
// return a.price + b.price
//     }))
// console.log(total);


const [cartStorage, setCartStorage] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            setCartStorage(cart);
        }
    }, []);

    const total = cartStorage.reduce((sum, item) => sum + Number(item.price), 0); // Sum the prices correctly

    const removeFromCart = (id) => {
        const updatedCart = cartStorage.filter(item => item._id !== id);
        setCartStorage(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const [userStorage,setUserStorage]=useState(JSON.parse(localStorage.getItem('user')));

    const [removeCartData,setRemoveCartData]=useState(false)
    const router=useRouter();

    // useEffect(()=>{
    //     if(!total){
    //         router.push('/')
    //     }
    // },[total])

    const orderNow=async()=>{
        let user_id=JSON.parse(localStorage.getItem('user'))._id;
        let cart=JSON.parse(localStorage.getItem('cart'));
        let foodItemIds=cart.map((item)=>item._id).toString();
        let deliveryBoy_id='67a748fa08b1910f978d73ad';
        let resto_id=cart[0].resto_id;
        let collection={
            user_id,
            resto_id,
            foodItemIds,
            deliveryBoy_id,
            status:'confirm',
            amount: total +DELIVERY_CHARGES+(total*TAX/100)
        }
        let response=await fetch('http://localhost:3000/api/order',{
            method:'POST',
            body:JSON.stringify(collection)
        });
        response=await response.json();
        if(response.success){
            alert("Order confirmed")
            setRemoveCartData(true)
            router.push('myprofile')
        }else{
            alert("Order Not Confirm")
        }
        console.log(collection);
    }


    // const orderNow = async () => {
    //     if (!userStorage) {
    //         alert("User not logged in!");
    //         return;
    //     }

    //     try {
    //         let collection = {
    //             user_id: userStorage._id,
    //             resto_id: cartStorage[0].resto_id,
    //             foodItemIds: cartStorage.map(item => item._id).toString(),
    //             deliveryBoy_id: '67a748fa08b1910f978d73ad',
    //             status: 'confirm',
    //             amount: total+DELIVERY_CHARGES+(total*TAX/100),
    //         };

    //         let response = await fetch('http://localhost:3000/api/order', {
    //             method: 'POST',
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(collection)
    //         });

    //         let result = await response.json();

    //         if (result.success) {
    //             alert("Order confirmed");
    //         } else {
    //             alert("Order not confirmed: " + result.message);
    //         }
    //     } catch (error) {
    //         console.error("Error placing order:", error);
    //         alert("Something went wrong. Please try again.");
    //     }
    // };

    return(<div>
       <CustomerHeader removeCartData={removeCartData}/>
        {/* //</div> */}
        <div className="total-wrapper">
           <div className="block-1">
            <h2 className="font-bold text-xl mt-2 ml-2">User Details</h2>
           <div className="row">
                <span>Name </span>
                <span>{userStorage.name}</span>
            </div>
            <div className="row">
                <span>Address </span>
                <span>{userStorage.address}</span>
            </div>
            <div className="row">
                <span>Mobile </span>
                <span>{userStorage.mobile}</span>
            </div>

            <h2 className="font-bold text-xl mt-2 ml-2">Amount Details</h2>
            <div className="row">
                <span>Tax : </span>
                <span>{total*TAX/100}</span>
            </div>
            <div className="row">
                <span>Del.charges: </span>
                <span>100</span>
            </div>
            <div className="row">
                <span>Total Amount : </span>
                <span>{total +DELIVERY_CHARGES+(total*TAX/100)}</span>
            </div>
            <h2 className="font-bold text-xl mt-5 ml-2">Payment Mode</h2>
            <div className="row">
                <span>Cash on Delivery : </span>
                <span>{total +DELIVERY_CHARGES+(total*TAX/100)}</span>
            </div>
            
           </div>
           <div className="block-2">
                <button onClick={orderNow}>Place Your Order Now</button>
            </div>
        
        </div>
        {/* <Footer/> */}
    </div>)
}

export default Page;