"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateFoodItem=(props)=>{
    const [name, setName]=useState('');
    const [price, setPrice]=useState('');
    const [path, setPath]=useState('');
    const [description, setDescription]= useState('');
    const [error, setError]=useState(false);

    const router=useRouter();

    useEffect(()=>{
        handleLoadFoodItems();
    },[])
    const handleLoadFoodItems=async()=>{
        let response=await fetch("http://localhost:3000/api/restaurant/foods/edit/"+props.params.id)
                     response =await response.json();
                     if(response.success){
                        console.log(response.result);
                        setName(response.result.name)
                        setPrice(response.result.price)
                        setPath(response.result.path)
                        setDescription(response.result.description)
                     }
    }

    const handleUpdateFoodItem=async(e)=>{
        e.preventDefault();
        console.log(name, price, path, description);
        if(!name || !price || !path || !description){
            setError(true)
            return false;
        }else{
            setError(false);
        }
        
        let response=await fetch("http://localhost:3000/api/restaurant/foods/edit/"+props.params.id, {
            method:'PUT',
            body:JSON.stringify({name, price, path, description})
        })
        response=await response.json();
        if(response.success){
            router.push("../dashboard")
            alert("Data is updated")
        }else{
            alert("Data is not updated, please try again")
        }
    }

    return(
        <div className="flex items-center justify-center h-screen bg-blue-100">
        <div className="bg-white p-8 rounded shadow-lg">
            <h1 className="mt-5 font-bold text-xl text-center">Add New Item</h1>
            <form className="flex flex-col gap-4">
               
                <div>
                   
                    <input  className="border border-gray-400 p-2 rounded-sm mt-1" type="text" placeholder="Enter Food Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                {
                    error && !name && <span className="text-red-500">Enter Valid Food Name</span>
                }
                <div>
                    
                    <input  className="border border-gray-400 p-2 rounded-sm mt-1" type="text" placeholder="Enter Food Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                {
                    error && !price && <span className="text-red-500">Enter Valid Food Price</span>
                }

                <div>
                    <input className="border border-gray-400 p-2 rounded-sm mt-1" type="text" placeholder="Enter Food Image URL" value={path} onChange={(e)=>setPath(e.target.value)}/>
                </div>
                {
                    error && !path && <span className="text-red-500">Enter Valid Food Image URL</span>
                }

                <div>
                    <input className="border border-gray-400 p-2 rounded-sm mt-1" type="text" placeholder="Enter Product Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                {
                    error && !name && <span className="text-red-500">Enter Valid Food Description</span>
                }
                <div className="flex flex-col gap-2 items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUpdateFoodItem}>Update Food Item</button>
                </div>

                <div className="flex flex-col gap-2 items-center">
                <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>router.push('../dashboard')}>Bcak to Item List</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default UpdateFoodItem;