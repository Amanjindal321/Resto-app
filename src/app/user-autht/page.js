'use client'
import { useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";
import UserLogin from "../_components/UserLogin";
import UserSignUp from "../_components/UserSignUp";


const UserAutht=(props)=>{
    const [login, setLogin]=useState(true)
    console.log("order flag",props);
    return(
        <div>
            <CustomerHeader/>
            <div className="container">
            <h1 className="font-bold text-xl pt-5">{login?'User Login':'User Signup'}</h1>
            {
                login?<UserLogin redirect={props.searchParams}/>:<UserSignUp redirect={props.searchParams} />
            }

            {                                                            //change line 21 to 25
                login 
                    ?<UserLogin redirect={props?.searchParams || {}} />
                    :<UserSignUp redirect={props?.searchParams || {}} />
            }
            <button onClick={()=>setLogin(!login)} className="mt-1 mb-5 text-blue-900">
                {login?'Do not have account ? Signup':'Already have an account? login'}
            </button>
            </div>
            
            {/* <Footer/> */}
        </div>
    )
}
export default UserAutht;