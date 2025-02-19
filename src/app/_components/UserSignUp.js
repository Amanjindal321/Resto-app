
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";


const UserSignUp=(props)=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    const [city, setCity]=useState('');
    const [address,setAddress]=useState('');
    const [mobile,setMobile]=useState('');
    const router =useRouter();
    const searchParams=useSearchParams(); 

    const handleSignUp=async()=>{
        console.log(name,email,password,confirmPassword,city,address,mobile);
        let response=await fetch('http://localhost:3000/api/user',{
            method:'post',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({name,email,password,city,address,mobile})
        })
        response=await response.json();
        if(response.success){
           const {result}=response;
           delete result.password;
           localStorage.setItem('user',JSON.stringify(result));
        //    if(props?.redirect?.order){
          if(searchParams.get("order")){
            router.push('/order')
          }else{
            router.push('/')
          }
        }else{
            alert("Invalid")
        }
    }

    return(
        <div>
            <div className="input-wrapper">
            <input type="text" className="input-field" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"></input>
            </div>
            <div className="input-wrapper">
            <input type="text" className="input-field" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"></input>
            </div>
            <div className="input-wrapper">
            <input type="text" className="input-field" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"></input>
            </div>
            <div className="input-wrapper">
            <input type="text"  className="input-field" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password"></input>
            </div>
            <div className="input-wrapper">
            <input type="text"  className="input-field" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="City"></input>
            </div>
            <div className="input-wrapper">
            <input type="text"  className="input-field" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address"></input>
            </div>
            <div className="input-wrapper">
            <input type="text"  className="input-field" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Enter Mobile no"></input>
            </div>
            <div>
                <button onClick={handleSignUp} className="button">Signup</button>
            </div>
            
        </div>
        
        
    )
}
export default UserSignUp;