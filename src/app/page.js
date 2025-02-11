// "use client"
// import CustomerHeader from "./_components/CustomerHeader";
// import Header from "./_components/Header";
// import Footer from "./_components/Footer";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [locations, setLocations]=useState([])
//   const [selectedLocation, setSelectedLocation]=useState('')
//   const [showLocation, setShowLocation]=useState(false)

//   useEffect(()=>{
//     loadLocations();
//   },[])
//   const loadLocations=async()=>{
//     let response=await fetch("http://localhost:3000/api/customer/locations");
//     response=await response.json();
//     if(response.success){
//       setLocations(response.result)
//     }
//   }

//   const handleListItem=(item)=>{
//     setSelectedLocation(item)
//     setShowLocation(false)
//   }
//   return (
//    <div>
//       <CustomerHeader />
//       <div className="min-h-screen ">
//       <div className="bg-[url('/banner1.jpg')] bg-no-repeat bg-cover min-h-[530px] bg-slate-500 bg-blend-multiply">
//         <h1 className="text-white text-2xl font-bold text-center pt-14 pb-3">Food Deliver App</h1>
      
//       <div className="flex items-center justify-center pt-18">
//         <div className="w-1/4 bg-white">
//         <input type="text" placeholder="Select Place"className="px-5 py-2 outline-none " value={selectedLocation} onChange={(e)=> setSelectedLocation(e.target.value)} onClick={()=>setShowLocation(true)}/>
//         <ul className="absolute bg-yellow-200 px-1 mt-30 border border-gray-400">
//           {
//            showLocation && locations.map((item)=>(
//               <li className="p-1" onClick={()=>handleListItem(item)}>{item}</li>
//             ))
//           }
//         </ul>
//         </div>
        
//         <div className="h-10 w-[2px] bg-gray-300 "></div>
//         <div className=" w-1/4 bg-white">
//         <input type="text" placeholder="Enter Food or Restaurant Name"className="px-5 py-2 border-1-2 outline-none "/>
//         </div>
        
//       </div>
//       </div> 
//       <h1 className="text-red-400 text-2xl">Home</h1>
//       </div>
//       {/* <Footer /> */}
      
//    </div>
   
//   );
// }









// "use client";
// import CustomerHeader from "./_components/CustomerHeader";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [locations, setLocations] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [showLocation, setShowLocation] = useState(false);
//   const [restaurants, setRestaurants]=useState([])

//   useEffect(() => {
//     loadLocations();
//     loadRestaurants();
//   }, []);

//   const loadRestaurants=async(params)=>{
//     let url="http://localhost:3000/api/customer"
//     if(params?.location){
//       url=url+"?location="+params.location
//     }else if(params?.restaurant){
//       url=url+"?restaurant="+params.restaurant

//     }else{
//       console.log("else part code")
//     }
//     let response=await fetch(url)
//     response=await response.json();
//     if(response.success){
//       setRestaurants(response.result)
//     }
//   }

//   const loadLocations = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/customer/locations");
//       const data = await response.json();
//       if (data.success) {
//         // Ensure locations have unique IDs or use an index as a fallback
//         const formattedLocations = data.result.map((item, index) => ({
//           id: item.id || index,
//           name: item.name || item, // Handle if result contains strings
//         }));
//         setLocations(formattedLocations);
//       }
//     } catch (error) {
//       console.error("Error fetching locations:", error);
//     }
//   };

//   const handleListItem = (item) => {
//     setSelectedLocation(item); // Update input with selected name
//     setShowLocation(false); // Hide the dropdown
//     loadRestaurants({location:item})
//   };

//   return (
//     <div>
//       <CustomerHeader />
//       <div className="min-h-screen">
//         <div className="bg-[url('/banner1.jpg')] bg-no-repeat bg-cover min-h-[530px] bg-slate-500 bg-blend-multiply">
//           <h1 className="text-white text-2xl font-bold text-center pt-14 pb-3">
//             Food Deliver App
//           </h1>

//           <div className="flex items-center justify-center pt-18">
//             {/* Location Input */}
//             <div className="w-1/4 bg-white relative">
//               <input
//                 type="text"
//                 placeholder="Select Place"
//                 className="px-5 py-2 outline-none"
//                 value={selectedLocation}
//                 onChange={(event) => setSelectedLocation(event.target.value)}
//                 onFocus={() => setShowLocation(true)}
//               />
//               {showLocation && (
//                 <ul className="absolute bg-yellow-200 px-1 mt-1 border border-gray-400 w-full">
//                   {locations.map((item) => (
//                     <li
//                       key={item.id} // Unique key for each list item
//                       className="p-1 cursor-pointer hover:bg-yellow-300"
//                       onClick={() => handleListItem(item)}
//                     >
//                       {item.name}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* Divider */}
//             <div className="h-10 w-[2px] bg-gray-300"></div>

//             {/* Search Input */}
//             <div className="w-1/4 bg-white">
//               <input
//                 type="text"
//                 onChange={(event)=>loadRestaurants({restaurant:event.target.value})}
//                 placeholder="Enter Food or Restaurant Name"
//                 className="px-5 py-2 border-1-2 outline-none"
//               />
//             </div>
//           </div>

//         </div>
        
//         <div className="flex flex-wrap justify-center">
//   {restaurants.map((item, index) => (
//     <div
//       key={item.id || index}
//       className="bg-yellow-500 m-2 p-4 rounded-md shadow-md w-72"
//     >
//       <div className="font-bold text-lg text-center mb-2">
//         {item.restaurantName}
//       </div>
//       <div className="text-sm">
//         <p>
//           <span className="font-semibold">City:</span> {item.city}
//         </p>
//         <p>
//           <span className="font-semibold">Address:</span> {item.address}
//         </p>
//         <p>
//           <span className="font-semibold">Contact:</span> {item.phone}
//         </p>
//         <p>
//           <span className="font-semibold">Email:</span> {item.email}
//         </p>
//       </div>
//     </div>
//   ))}
// </div>
      
//       {/* same as upper but prev. design */}

      
//         {/* <div className=" flex flex-wrap ">
//           {
//             restaurants.map((item, index)=>(
//               <div key={item.id || index} className="bg-yellow-500 m-2 p-2">
//                 <div className="flex justify-around font-bold">
//                   <h3>{item.restaurantName}</h3>
//                   <h5>Contact: {item.phone}</h5>
//                 </div>
//                 <div className="flex justify-around">
//                   <div><span className="font-semibold">City: </span>{item.city},<span>&nbsp;</span></div>
//                   <div><span className="font-semobold">Address: </span>{item.address}, <span className="font-semibold">Email: </span>{item.email}</div>
//                 </div>
//               </div>
//             ))
//           }
//         </div> */}
//         {/* <h1 className="text-red-400 text-2xl">Home</h1> */}
//       </div>
//     </div>
//   );
// }






"use client";
import { useRouter } from "next/navigation";
import CustomerHeader from "./_components/CustomerHeader";
import { useEffect, useState } from "react";
import Header from "./_components/Header";

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showLocation, setShowLocation] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const router=useRouter();

  useEffect(() => {
    loadLocations();
    loadRestaurants();
  }, []);

  const loadRestaurants = async (params = {}) => {
    try {
      let url = "http://localhost:3000/api/customer";

      // Add query parameters based on filters
      const queryParams = [];
      if (params.location) queryParams.push(`location=${params.location}`);
      if (params.restaurant) queryParams.push(`restaurant=${params.restaurant}`);

      if (queryParams.length) {
        url += `?${queryParams.join("&")}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        setRestaurants(data.result ); // addition of || []
      } else {
        console.error("Error fetching restaurants:", data.message);
      }
    } catch (error) {
      console.error("Error loading restaurants:", error);
    }
  };

  const loadLocations = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/customer/locations");
      const data = await response.json();
      if (data.success) {
        const formattedLocations = data.result.map((item, index) => ({
          id: item.id || index,
          name: item.name || item,
        }));
        setLocations(formattedLocations);
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const handleLocationSelect = (item) => {
    setSelectedLocation(item.name);
    setShowLocation(false);
    loadRestaurants({ location: item.name });
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    loadRestaurants({ restaurant: query });
  };

  return (
    <div>
      {/* <CustomerHeader /> */}
      <Header/>
      <div className="min-h-screen">
        <div className="bg-[url('/banner1.jpg')] bg-no-repeat bg-cover min-h-[530px] bg-slate-500 bg-blend-multiply">
          <h1 className="text-white text-2xl font-bold text-center pt-14 pb-3">
            Resto Deliver App
          </h1>

          <div className="flex items-center justify-center pt-18">
            {/* Location Input */}
            <div className="w-1/4 bg-white relative">
              <input
                type="text"
                placeholder="Select Place"
                className="px-5 py-2 outline-none"
                value={selectedLocation}
                onChange={(event) => setSelectedLocation(event.target.value)}
                onFocus={() => setShowLocation(true)}
              />
              {showLocation && (
                <ul className="absolute bg-yellow-200 px-1 mt-1 border border-gray-400 w-full">
                  {locations.map((item) => (
                    <li
                      key={item.id}
                      className="p-1 cursor-pointer hover:bg-yellow-300"
                      onClick={() => handleLocationSelect(item)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Divider */}
            <div className="h-10 w-[2px] bg-gray-300"></div>

            {/* Search Input */}
            <div className="w-1/4 bg-white">
              <input
                type="text"
                placeholder="Enter Food or Restaurant Name"
                className="px-5 py-2 outline-none"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>

        {/* Restaurant List */}
        <div className="flex flex-wrap justify-center">
          {restaurants.map((item, index) => (
            <div
              key={item.id || index}
              className="bg-yellow-500 m-2 p-4 rounded-md shadow-md w-72"
              onClick={()=>router.push('explore/'+item.restaurantName+"?id="+item._id)}
            >
              <div className="font-bold text-lg text-center mb-2">
                {item.restaurantName}
              </div>
              <div className="text-sm">
                <p>
                  <span className="font-semibold">City:</span> {item.city}
                </p>
                <p>
                  <span className="font-semibold">Address:</span> {item.address}
                </p>
                <p>
                  <span className="font-semibold">Contact:</span> {item.phone}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {item.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
