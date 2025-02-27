// 'use client'
// import { useState } from "react";
// import CustomerHeader from "../_components/CustomerHeader";
// import Footer from "../_components/Footer";
// import UserLogin from "../_components/UserLogin";
// import UserSignUp from "../_components/UserSignUp";


// const UserAutht=(props)=>{
//     const [login, setLogin]=useState(true)
//     console.log("order flag",props);
//     return(
//         <div>
//             <CustomerHeader/>
//             <div className="container">
//             <h1 className="font-bold text-xl pt-5">{login?'User Login':'User Signup'}</h1>

//             {
//                 login? 'User Login' : 'User Signup'
//             }

//             {/* {
//                 login?<UserLogin redirect={props.searchParams}/>:<UserSignUp redirect={props.searchParams} />
//             } */}

//             {                                                            //change line 21 to 25
//                 login 
//                     ?<UserLogin redirect={props?.searchParams || {}} />
//                     :<UserSignUp redirect={props?.searchParams || {}} />
//             }
//             <button onClick={()=>setLogin(!login)} className="mt-1 mb-5 text-blue-900">
//                 {login?'Do not have account ? Signup':'Already have an account? login'}
//             </button>
//             </div>
            
//             {/* <Footer/> */}
//         </div>
//     )
// }
// export default UserAutht;






// below changed for alert msg

// "use client";
// import { useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import CustomerHeader from "../_components/CustomerHeader";
// import Footer from "../_components/Footer";
// import UserLogin from "../_components/UserLogin";
// import UserSignUp from "../_components/UserSignUp";

// const AuthComponent = () => {
//     const [login, setLogin] = useState(true);
//     const searchParams = useSearchParams(); // Use the Next.js hook

//     console.log("Search Params:", searchParams.toString());

//     return (
//         <div>
//             <CustomerHeader />
//             <div className="container">
//                 <h1 className="font-bold text-xl pt-5">
//                     {login ? "User Login" : "User Signup"}
//                 </h1>
//                 {login ? (
//                     <UserLogin redirect={searchParams.get("redirect") || {}} />
//                 ) : (
//                     <UserSignUp redirect={searchParams.get("redirect") || {}} />
//                 )}
//                 <button
//                     onClick={() => setLogin(!login)}
//                     className="mt-1 mb-5 text-blue-900"
//                 >
//                     {login ? "Do not have an account? Signup" : "Already have an account? Login"}
//                 </button>
//             </div>
//         </div>
//     );
// };

// const UserAutht = () => {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <AuthComponent />
//         </Suspense>
//     );
// };

// export default UserAutht;




"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";
import UserLogin from "../_components/UserLogin";
import UserSignUp from "../_components/UserSignUp";

const AuthComponent = () => {
    const [login, setLogin] = useState(true);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState(""); // "success" or "error"
    const searchParams = useSearchParams();

    console.log("Search Params:", searchParams.toString());

    // Handle login response
    const handleLoginResponse = (success) => {
        if (success) {
            setAlertMessage("Login successful! Redirecting...");
            setAlertType("success");
            setTimeout(() => {
                setAlertMessage(null);
                window.location.href = searchParams.get("redirect") || "/dashboard"; // Redirect after success
            }, 2000);
        } else {
            setAlertMessage("Invalid credentials! Please try again.");
            setAlertType("error");
        }
    };

    // Handle signup response
    const handleSignUpResponse = (success) => {
        if (success) {
            setAlertMessage("Signup successful! You can now login.");
            setAlertType("success");
            setTimeout(() => setAlertMessage(null), 2000);
        } else {
            setAlertMessage("Signup failed! Please try again.");
            setAlertType("error");
        }
    };

    return (
        <div>
            <CustomerHeader />

            {/* Alert Messages */}
            {alertMessage && (
                <div
                    className={`p-3 rounded-md text-center mb-4 ${
                        alertType === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
                >
                    {alertMessage}
                </div>
            )}

            <div className="container">
                <h1 className="font-bold text-xl pt-5">
                    {login ? "User Login" : "User Signup"}
                </h1>

                {login ? (
                    <UserLogin 
                        redirect={searchParams.get("redirect") || {}} 
                        onLoginResponse={handleLoginResponse} 
                    />
                ) : (
                    <UserSignUp 
                        redirect={searchParams.get("redirect") || {}} 
                        onSignUpResponse={handleSignUpResponse} 
                    />
                )}

                <button
                    onClick={() => setLogin(!login)}
                    className="mt-1 mb-5 text-blue-900"
                >
                    {login ? "Do not have an account? Signup" : "Already have an account? Login"}
                </button>
            </div>
        </div>
    );
};

const UserAutht = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AuthComponent />
        </Suspense>
    );
};

export default UserAutht;




