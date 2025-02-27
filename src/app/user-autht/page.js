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
import UserLogin from "../_components/UserLogin";
import UserSignUp from "../_components/UserSignUp";

const AuthComponent = () => {
    const [login, setLogin] = useState(true);
    const searchParams = useSearchParams();

    // Function to handle login success
    const handleLoginSuccess = () => {
        alert("Login Successful!");
        window.location.href = searchParams.get("redirect") || "/dashboard";
    };

    return (
        <div>
            <CustomerHeader />
            <div className="container text-center">
                <h1 className="font-bold text-xl pt-5">{login ? "User Login" : "User Signup"}</h1>
                {login ? (
                    <UserLogin onSuccess={handleLoginSuccess} />
                ) : (
                    <UserSignUp />
                )}
                <button onClick={() => setLogin(!login)} className="mt-2 text-blue-900">
                    {login ? "Don't have an account? Signup" : "Already have an account? Login"}
                </button>
            </div>
        </div>
    );
};

const UserAutht = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <AuthComponent />
    </Suspense>
);

export default UserAutht;
