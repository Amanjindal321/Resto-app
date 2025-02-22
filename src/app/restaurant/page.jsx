"use client"
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const Restaurant=()=>{
    const [login, setLogin]=useState(true)
    return(
        <>
        <div className=" text-center p-5 font-semibold">
            <Header/>
            {/* <h1 className="text-3xl">Restaurant Login/SignUp Page</h1> */}

            <div>
                {
                    login ? <RestaurantLogin/> : <RestaurantSignUp/>
                }

            </div>

            <div>
                <button className="mt-5 text-blue-900" onClick={()=>setLogin(!login)}>
                    {
                        login ? "Don't Have an Account? " : "Already Have a Account?"
                    }
                </button>
            </div>
        </div>
        {/* <Footer/> */}
        </>
    )
}

export default Restaurant;