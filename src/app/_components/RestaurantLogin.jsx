import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantLogin=()=>{
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [error, setError]=useState(false);

    const router=useRouter();

    const setLogin=async(e)=>{
        e.preventDefault();

        if(!email || !password){
            setError(true);
            return false
        } else{
            setError(false);
        }
        let response= await fetch("http://localhost:3000/api/restaurant",{
            method:'POST',
            mode: 'no-cors', // chnagee
            body :JSON.stringify({email, password, login:true})
        })
        response=await response.json();
        if(response.success){
            const {result}=response;
            delete result.password;
            localStorage.setItem("restaurantUser", JSON.stringify(result))
            router.push("/restaurant/dashboard")
            alert("Login Successfull")
        } else{
            alert("Login Failed! Invalid Login Details")
        }
    
        console.log(email, password);
    }
    

    return(
        <div>
            <h2 className="text-3xl mt-5">Restaurant Login Page</h2>

            <div>
                <form className="flex flex-col gap-4">
                    <div className="mt-5">
                        <input className="border border-gray-500 px-2 py-1 rounded-md" type="text" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    {
                        error && !email && <span className="text-red-500">Please Enter Your Valid Email</span>
                    }
                    <div>
                        <input className="border border-gray-500 px-2 py-1 rounded-md" type="password" placeholder="Enter Your Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                        {
                            error && !password && <span className="text-red-500">Please Enter Your Valid Password</span>
                        }
                    <div>
                        <button className="border border-gray-300 px-3 py-1 bg-blue-500 rounded-md" onClick={setLogin}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RestaurantLogin;