'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
    const [details, setDetails]=useState();
    const router= useRouter();
    const pathName=usePathname();

    useEffect(()=>{
        let data = localStorage.getItem("restaurantUser");
        if(!data && pathName=="/restaurant/dashboard"){
            router.push("/restaurant")
        } else if(data && pathName=="/restaurant"){
            router.push("/restaurant/dashboard")
        }else{
            setDetails(JSON.parse(data))
        }
    }, [router]);

    const logout=()=>{
        localStorage.removeItem("restaurantUser")
        router.push("/restaurant")
    }

return (

    // <header className="bg-gray-800 text-white">
    //     <div className="container mx-auto flex justify-between items-center py-4 px-6">
    //         {/* Logo */}
    //         <Link href="/"
    //             className="text-2xl font-bold hover:text-gray-400 transition">Restaurant
    //         </Link>
            
    //         {/* Navigation Links */}
    //         <nav className="flex space-x-4">
    //             <Link href="/menu"
    //                  className="hover:text-gray-400 transition">Menu
    //             </Link>
    //             <Link href="/about"
    //                  className="hover:text-gray-400 transition">About Us
    //             </Link>
    //             <Link href="/contact"
    //                 className="hover:text-gray-400 transition">Contact
    //             </Link>
    //         </nav>

    //         {/* User Profile Section */}
    //         {details ? (
    //             <div className="flex items-center space-x-2">
    //                 <span className="text-sm font-medium">{`Welcome, ${details.name}`}</span>
    //                 <Link href="/profile"
    //                      className="bg-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-600 transition">
    //                         Profile
                        
    //                 </Link>
    //             </div>
    //         ) : (
    //             <Link href="/login"
    //                 className="bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition">
    //                     Log In
                    
    //             </Link>
    //         )}
    //     </div>
    // </header>

    <div className=" container mx-auto flex justify-between items-center py-5 px-3 bg-gray-700">
        {/* left section */}

        <div className=" flex-1">
            <img src="/logo.jpg"  className="rounded-md w-20 h-16"/>
        </div>

        {/* Right Section */}

        <div className="">
            <ul className=" flex gap-8">
                <li className=" text-white cursor-pointer hover:text-blue-400 hover:underline"
                    onClick={()=> router.push('/')}>
                Home</li>

                <li className="text-white cursor-pointer hover:text-blue-400 hover:underline"
                    onClick={()=> router.push('/about')}>
                About</li>

                <li className="text-white cursor-pointer hover:text-blue-400 hover:underline"
                    onClick={()=> router.push('/contact')}>
                Contact</li>

                {
                    details && details.name?
                    <>
                    <li className="cursor-pointer hover:text-blue-400 hover:underline text-white" onClick={logout}>Logout</li>
                    <li className="cursor-pointer hover:text-blue-400 hover:underline text-white" 
                        onClick={()=> router.push('/profile')}>
                    Profile</li>
                    </>: <li className="cursor-pointer hover:text-blue-400 hover:underline text-white"
                            onClick={()=> router.push('/restaurant')}
                        ></li>   //Login/
                }
            </ul>
        </div>
    </div>

    )
};

export default Header;
