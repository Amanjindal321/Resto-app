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

    const total = cartStorage.reduce((sum, item) => sum + Number(item.price), 0); // Summing the prices correctly

    const removeFromCart = (id) => {
        const updatedCart = cartStorage.filter(item => item._id !== id);
        setCartStorage(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const router=useRouter();
    const orderNow=()=>{
        if(JSON.parse(localStorage.getItem('user'))){
            router.push('/order')
        }else{
            router.push('/user-autht?order=true')
        }
       
    }

    return(<div>
       <CustomerHeader/>
            <div className="food-list-wrapper">
                {
                    cartStorage.length>0 ? cartStorage.map((item, index)=>(
                        <div key={item.id || index} className="flex gap-3 border-b-4 border-orange-300 py-3 px-2">
                            <div className="list-item-block-1"><img width={100} src={item.path} alt="Food item"  className="w-24 h-16 object-cover rounded-md mt-1 ml-1"/></div>
                            <div className="list-item-block-2">
                             <div className="font-bold">{item.name}</div>
                             
                             <div>{item.description}</div>
                             { 
                                <button className="bg-red-500 text-white px-2 py-1 cursor-pointer rounded-sm" onClick={()=>removeFromCart(item._id)}>Remove from Cart</button>
                             }
                            </div>
                            <div className="font-bold">Price : {item.price}</div>
                            
                        </div>
                        
                    )) : <h1 className="font-bold text-2xl text-center py-5">No Food Items Listed</h1>
                }
            </div>
        {/* //</div> */}
        <div className="total-wrapper">
           <div className="block-1">
           <div className="row">
                <span>Food charges : </span>
                <span>{total}</span>
            </div>
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
            
           </div>
           <div className="block-2">
                <button onClick={orderNow}>Order Now</button>
            </div>
        
        </div>
        {/* <Footer/> */}
    </div>)
}

export default Page;