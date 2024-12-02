import { useState } from "react";

const AddFoodItem=()=>{
    const [name, setName]=useState('');
    const [price, setPrice]=useState('');
    const [path, setPath]=useState('');
    const [description, setDescription]= useState('');
    const [error, setError]=useState(false);

    const handleAddFoodItem=async(e)=>{
        e.preventDefault();
        console.log(name, price, path, description);
        if(!name || !price || !path || !description){
            setError(true)
            return false;
        }else{
            setError(false);
        }
        let resto_id;
        const restaurantData=JSON.parse(localStorage.getItem("restaurantUser"));
        if(restaurantData){
            resto_id=restaurantData._id
        }
        let response=await fetch("http://localhost:3000/api/restaurant/foods",{
            method:"POST",
            body:JSON.stringify({name, price, path, description, resto_id})
        });
        response=await response.json();
        if(response.success){
            alert("Food item Added")
        }else{
            alert("Food item Not Added!")
        }
    }

    return(

        <div>
            <h1 className="mt-5 font-bold text-xl">Add New Item</h1>
            <form className="flex flex-col gap-4">
                <div>
                    <input className="border border-gray-400 p-2 rounded-sm mt-1" type="text" placeholder="Enter Food Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                {
                    error && !name && <span className="text-red-500">Enter Valid Food Name</span>
                }
                <div>
                    <input className="border border-gray-400 p-2 rounded-sm mt-1" type="text" placeholder="Enter Food Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
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
                <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddFoodItem}>Add Food Item</button>
                </div>
            </form>
        </div>
    )
}

export default AddFoodItem;