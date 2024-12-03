import { useRouter } from "next/navigation";
import { useState } from "react";
//import Header from "./Header";



const RestaurantSignUp=()=>{
   const [name, setName]=useState('');
   const [email, setEmail]=useState('');
   const [password, setPassword]=useState('');
   const [c_password, setC_Password]=useState('');
   const [passwordError, setPasswordError]=useState(false);
   const [phone, setPhone]=useState('');
   const [address, setAddress]=useState('');
   const [error, setError]=useState(false);
   const router= useRouter();

   const handleSignUp=async(e)=>{
    e.preventDefault();

    if(password !==c_password){
        setPasswordError(true);
        return false
    }else{
        setPasswordError(false);
    }

    if(!name || !email || !password || !phone || !address){
        setError(true);
        return false
    } else{
        setError(false);
    }

    console.log(name, email, password, phone, address)
    let response=await fetch("http://localhost:3000/api/restaurant", {
        method:"POST",
        mode: 'no-cors',  // changeeee
        headers: {
            'Content-Type': 'application/json', // changgggg
        },
        body:JSON.stringify({name, email, password, phone, address})
    })

    response=await response.json();
    console.log(response);
    if (response.success) {
        alert("Restaurant Registered Successfully!")
        console.log(response);
        const {result}=response;
        delete result.password
        localStorage.setItem("restaurantUser", JSON.stringify(result));
        router.push("/restaurant/dashboard")
    }
   }
   
    return(
        <div>
            {/* <Header/> */}
            <h2 className="mt-5">Restaurant SignUp Page</h2>

            <div>
                <form className=" flex flex-col gap-4">
                    <div>
                        <input className=" mt-5 border border-gray-500 px-2 py-1 rounded-md" type="text" placeholder="Enter Your Username" value={name} onChange={(e)=>setName(e.target.value)} />
                       
                    </div>
                        {
                            error && !name && <span className="text-red-500">Please Enter Your Valid Name</span>
                        }
                    <div>
                        <input className="border border-gray-500 px-2 py-1 rounded-md" type="text" placeholder="Enter Your Email Id" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        {
                            error && !email && <span className=" text-red-500">Please Enter Your Valid Email</span>
                        }
                    </div>
                    <div>
                        <input className="border border-gray-500 px-2 py-1 rounded-md" type="password" placeholder="Enter Your Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        {
                            error && !password && <span className=" text-red-500">Please Enter Your Valid Password</span>
                        }
                    </div>
                    <div>
                        <input className="border border-gray-500 px-2 py-1 rounded-md" type="password" placeholder="Enter Your Password" value={c_password} onChange={(e)=>setC_Password(e.target.value)}/>
                        {
                            error && !c_password && <span className=" text-red-500">Please Enter Your Valid Password</span>
                        }
                        
                    </div>
                        {
                            passwordError && <span className=" text-red-500">Password and Confirm Password must be same</span>
                        }
                    <div>
                        <input className="border border-gray-500 px-2 py-1 rounded-md" type="text" placeholder="Enter Your Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        {
                            error && !phone && <span className=" text-red-500">Please Enter Your Valid Phone</span>
                        }
                    </div>
                    <div>
                        <input className="border border-gray-500 px-2 py-1 rounded-md" type="text" placeholder="Enter Your Full Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                        {
                            error && !address && <span className=" text-red-500">Please Enter Your Valid Address</span>
                        }
                    </div>
        
                    <div>
                        <button className="border border-gray-300 px-3 py-1 bg-blue-500 rounded-md" onClick={handleSignUp}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RestaurantSignUp;