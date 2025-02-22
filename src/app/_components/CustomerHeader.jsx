import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CustomerHeader=(props)=>{
    console.log(props)
    // const cartStorage=JSON.parse(localStorage.getItem('cart'));  // change1
    // const [cartNumber,setCartNumber]=useState(cartStorage?.length);
    // const [cartItem, setCartItem]=useState(cartStorage)  

    // const userStorage=JSON.parse(localStorage.getItem('user'));
    // const [user, setUser]=useState(userStorage?userStorage:undefined)

    const [user, setUser]=useState(undefined);  //change in place of above two lines
    const [cartItem, setCartItem]=useState([]);
    const [cartNumber,setCartNumber]=useState(0);
    const router=useRouter();
    // console.log(userStorage);

    useEffect(()=>{
        if(typeof window !== "undefined"){
            const userStorage=JSON.parse(localStorage.getItem("user"))||null;
            setUser(userStorage);
        }
    },[]);

    useEffect(()=>{
        if(typeof window !== "undefined"){
            const cartStorage=JSON.parse(localStorage.getItem("cart")) || [];    // change1
            setCartItem(cartStorage);
            setCartNumber(cartStorage.length);
        }
    },[])

    useEffect(()=>{
        if(props.cartData){
            console.log(props)
            if(cartNumber){
                if(cartItem[0].resto_id!=props.cartData.resto_id){
                    localStorage.removeItem('cart');
                    setCartNumber(1);
                    setCartItem([props.cartData])
                    localStorage.setItem('cart', JSON.stringify([props.cartData]))
                }else{
                    let localCartItem=cartItem;
                localCartItem.push(JSON.parse(JSON.stringify(props.cartData)))
                setCartItem(localCartItem);
                setCartNumber(cartNumber+1)
                localStorage.setItem('cart',JSON.stringify(localCartItem))
                }
                
            }else{
                setCartNumber(1)
                setCartItem([props.cartData]);
                localStorage.setItem('cart',JSON.stringify([props.cartData]))
            }
            
        }
    }, [props.cartData])

    useEffect(()=>{
        if(props.removeCartData){
            let localCartItem=cartItem.filter((item)=>{
                return item._id!=props.removeCartData
            })
            setCartItem(localCartItem);
            setCartNumber(cartNumber-1)
            localStorage.setItem('cart', JSON.stringify(localCartItem));
            if(localCartItem.length==0){
                localStorage.removeItem('cart');
            }
        }
    },[props.removeCartData])

    useEffect(()=>{
        if(props.removeCartData){
            setCartItem([])
            setCartNumber(0);
            localStorage.removeItem('cart');
        }

    },[props.removeCartData])

    const logout=()=>{
      localStorage.removeItem('user');  
      router.push('/user-autht')
    }

    return (
        <header>
            <div className="container mx-auto flex justify-between items-center py-8 px-6 bg-gray-700">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src="/logo.jpg" alt="Street Food Logo" className="w-20 h-16 " />
                    
                </div>

                {/* Menu Items */}
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link href="/" className="text-white hover:text-yellow-200  font-medium transition duration-300">
                                    Home  
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/signin" className="text-white hover:text-yellow-200  font-medium transition duration-300">
                                    Sign In
                               
                            </Link>
                        </li> */}
                        {
                            user ?
                                <>
                                <li>
                                    <Link href="/myprofile" className="text-white hover:text-blue-200  font-medium transition duration-300">{user.name}</Link>
                                </li>
                                <li>
                                    <button onClick={logout} className="text-white hover:text-yellow-200  font-medium transition duration-300">Logout</button>
                                </li>
                                </>
                                :
                            <>
                            <li>
                            <Link href="/user-autht" className="text-white hover:text-yellow-200  font-medium transition duration-300">
                                   Login/Signup
                               
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/user-autht" className="text-white hover:text-yellow-200 font-medium transition duration-300">
                                    Sign Up   
                            </Link>
                        </li> */}
                            </>
                        }
                        <li>
                            <Link href={cartNumber?"/cart":"#"} className="text-white hover:text-yellow-200 font-medium transition duration-300">
                                    Cart ({cartNumber ? cartNumber : 0})  
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white hover:text-yellow-200  font-medium transition duration-300">
                                    About
                            </Link>
                        </li>
                        <li>
                            <Link href="/restaurant"className="text-white hover:text-yellow-200 font-medium transition duration-300">
                                    Add Restaurant
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default CustomerHeader;


{/* <div className="flex justify-between p-8 items-center bg-gray-300">
<div>
    {/* logo */}
//     <h1 className="bo">Street food</h1>
// </div>
// <div>
    {/* menu items */}
//     <ul className="flex gap-5">
//         <li><Link href={'/'} className="hover:text-blue-600 cursor-pointer">Home</Link></li>
//         <li><Link href={'/'} className="hover:text-blue-600 cursor-pointer">SignIn</Link></li>
//         <li><Link href={'/'} className="hover:text-blue-600 cursor-pointer">SignUp</Link></li>
//         <li><Link href={'/'} className="hover:text-blue-600 cursor-pointer">Cart (0)</Link></li>
//         <li><Link href={'/'} className="hover:text-blue-600 cursor-pointer">Add Restaurent</Link></li>
//     </ul>
// </div>

// </div> */}