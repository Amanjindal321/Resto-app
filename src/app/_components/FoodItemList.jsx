import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";

const FoodItemList=()=>{
    const [foodItems, setFoodItems]=useState();

    const router=useRouter();

    useEffect(()=>{
        loadFoodItems();
    },[])

    const loadFoodItems=async()=>{
        const restaurantData=JSON.parse(localStorage.getItem('restaurantUser'));
        const resto_id=restaurantData._id;
        console.log(restaurantData)
        let response=await fetch("http://localhost:3000/api/restaurant/foods/"+ resto_id)
        response=await response.json();
        if(response.success){
            setFoodItems(response.result)
        }else{
            alert("Food Item List is not Loading..")
        }
    }

    const deleteFoodItem=async(id)=>{
        let response=await fetch("http://localhost:3000/api/restaurant/foods/"+id, {
            method:'DELETE'
        })
        response=await response.json();
        if(response.success){
            loadFoodItems();
        }else {
            alert("Food Item not Deleted")
        }
    }
    return(
        <div className="flex flex-col items-center justify-center bg-blue-100  p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Food Items</h1>
            <div className="overflow-x-auto shadow-md rounded-lg w-11/12">
            <table className="min-w-full bg-gray-100 rounded-md border items-center">
                <thead className="bg-gradient-to-r from blue-500 to-teal-500 text-white border">
                    <tr className="border">
                        <td className="border p-2 px-6 py-3  text-sm text-black font-semibold uppercase">Id</td>
                        <td className="border p-2 px-6 py-3  text-sm text-black font-semibold uppercase">Name</td>
                        <td className="border p-2 px-6 py-3  text-sm text-black font-semibold uppercase">Price</td>
                        <td className="border p-2 px-6 py-3  text-sm text-black font-semibold uppercase">Image</td>
                        <td className="border p-2 px-6 py-3  text-sm text-black font-semibold uppercase">Description</td>
                        <td className="border p-2 px-6 py-3  text-sm text-black font-semibold uppercase">Operations</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        foodItems && foodItems.map((item, key)=>(
                            <tr key={key}>
                        <td className="border px-6 py-4 text-sm text-gray-600">{key+1}</td>
                        <td className="border px-6 py-4 text-sm text-gray-600">{item.name}</td>
                        <td className="border px-6 py-4 text-sm text-gray-600">{item.price}</td>
                        <td className="border px-6 py-4 text-sm text-gray-600">
                        <div className="flex justify-center items-center">
                            <img width={100}src={item.path}alt="image" className="w-24 h-16 object-cover rounded-md"/>
                        </div>
                        </td>
                        <td className="border px-6 py-4 text-sm text-gray-600">{item.description}</td>
                        <td className="border px-6 py-4 text-sm text-gray-600 space-x-2"><button className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600" onClick={()=>router.push('dashboard/'+item._id)}>Edit</button>
                         <button className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600" onClick={()=>deleteFoodItem(item._id)}>Delete</button></td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default FoodItemList;