import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"

const UserLogin=(props)=>{
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const router=useRouter();
    const searchParams=useSearchParams();
    
    const loginHandle=async()=>{
        //console.log(email,password);
        let response=await fetch('http://localhost:3000/api/user/login',{
            method:'post',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
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
                <input type="text" placeholder="Enter Email" value={email} onChange={(event)=>setEmail(event.target.value)} className="input-field"></input>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Enter Password" value={password} onChange={(event)=>setPassword(event.target.value)} className="input-field"></input>
            </div>
            <div className="input-wrapper">
              <button onClick={loginHandle} className="button">Login</button>
            </div>
        </div>
    )
}
export default UserLogin