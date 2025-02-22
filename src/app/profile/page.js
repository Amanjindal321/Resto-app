const Profile = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 to-red-100 text-gray-900">
            {/* Header */}
            <header className="bg-gradient-to-r from-orange-600 to-red-500 text-white py-4 fixed top-0 w-full shadow-lg">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-3xl font-extrabold">Restaurant Profile</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow mt-16 px-6 py-10">
                {/* Profile Info */}
                <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 text-center transition hover:shadow-2xl">
                    <div className="flex flex-col items-center">
                        {/* <img 
                            src="https://via.placeholder.com/150" 
                            alt="Restaurant Logo" 
                            className="w-32 h-32 rounded-full shadow-md border-4 border-white"
                        /> */}
                        <h2 className="text-4xl font-bold text-orange-700 mt-4">Tasty Bites</h2>
                        <p className="text-gray-700 text-lg">Your favorite place for delicious food</p>
                    </div>
                </section>

                {/* Restaurant Details */}
                <section className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-3xl font-bold text-center mb-4 text-red-700">Restaurant Details</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 border rounded-lg shadow-sm bg-yellow-100 hover:scale-105 transition">
                            <h3 className="text-2xl font-semibold text-yellow-700">📍 Location</h3>
                            <p className="text-gray-700 mt-2">123 Food Street, Your City</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-sm bg-green-100 hover:scale-105 transition">
                            <h3 className="text-2xl font-semibold text-green-700">📞 Contact</h3>
                            <p className="text-gray-700 mt-2">+123 456 7890</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-sm bg-blue-100 hover:scale-105 transition">
                            <h3 className="text-2xl font-semibold text-blue-700">🕒 Opening Hours</h3>
                            <p className="text-gray-700 mt-2">Mon - Sun: 9:00 AM - 11:00 PM</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-sm bg-pink-100 hover:scale-105 transition">
                            <h3 className="text-2xl font-semibold text-pink-700">📧 Email</h3>
                            <p className="text-gray-700 mt-2">contact@tastybites.com</p>
                        </div>
                    </div>
                </section>

                {/* Featured Dishes */}
                <section className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-3xl font-bold text-red-700 mb-4">🍽️ Featured Dishes</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4 border rounded-lg shadow-md bg-white hover:scale-105 transition">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg" 
                                alt="Dish 1" 
                                className="w-full h-32 object-cover rounded-lg"
                            />
                            <h3 className="text-xl font-semibold mt-2">Spicy Pizza</h3>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md bg-white hover:scale-105 transition">
                            <img 
                                src="https://content.jdmagicbox.com/comp/khanna/s8/9999p1628.1628.180914095152.r6s8/catalogue/dwarka-egg-burger-khanna-fast-food-snzrm3wfmf.jpg" 
                                alt="Dish 2" 
                                className="w-full h-32 object-cover rounded-lg"
                            />
                            <h3 className="text-xl font-semibold mt-2">Classic Burger</h3>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md bg-white hover:scale-105 transition">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ODK2tmAkskaKYm0JUz6aHpeo7TyvAHxT8A&s" 
                                alt="Dish 3" 
                                className="w-full h-32 object-cover rounded-lg"
                            />
                            <h3 className="text-xl font-semibold mt-2">Pasta Delight</h3>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="text-center mt-10">
                    <a href="/menu">
                        <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition">
                            View Full Menu 🍕
                        </button>
                    </a>
                </div>
            </main>
        </div>
    );
};

export default Profile;






// const OwnerProfile = () => {
//     return (
//         <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900">
//             {/* Header */}
//             <header className="bg-gray-900 text-white py-4 fixed top-0 w-full shadow-lg">
//                 <div className="container mx-auto px-6 flex justify-between items-center">
//                     <h1 className="text-2xl font-bold">Restaurant Dashboard</h1>
//                     <button className="bg-red-500 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600">
//                         Logout
//                     </button>
//                 </div>
//             </header>

//             {/* Main Content */}
//             <main className="flex-grow mt-16 px-6 py-10">
//                 {/* Profile Section */}
//                 <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//                     <div className="flex items-center space-x-6">
//                         <img
//                             src="https://via.placeholder.com/120"
//                             alt="Restaurant Logo"
//                             className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md"
//                         />
//                         <div>
//                             <h2 className="text-3xl font-bold text-gray-800">Tasty Bites</h2>
//                             <p className="text-gray-600 text-lg">Your restaurant's profile</p>
//                         </div>
//                         <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600">
//                             Edit Profile
//                         </button>
//                     </div>
//                 </section>

//                 {/* Restaurant Details */}
//                 <section className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
//                     <h2 className="text-2xl font-semibold text-gray-800 mb-4">Restaurant Details</h2>
//                     <div className="grid md:grid-cols-2 gap-6">
//                         <div className="p-4 border rounded-lg shadow-sm bg-gray-100">
//                             <h3 className="text-lg font-semibold">📍 Address</h3>
//                             <p className="text-gray-700 mt-1">123 Food Street, Your City</p>
//                         </div>
//                         <div className="p-4 border rounded-lg shadow-sm bg-gray-100">
//                             <h3 className="text-lg font-semibold">📞 Contact</h3>
//                             <p className="text-gray-700 mt-1">+123 456 7890</p>
//                         </div>
//                         <div className="p-4 border rounded-lg shadow-sm bg-gray-100">
//                             <h3 className="text-lg font-semibold">🕒 Opening Hours</h3>
//                             <p className="text-gray-700 mt-1">Mon - Sun: 9:00 AM - 11:00 PM</p>
//                         </div>
//                         <div className="p-4 border rounded-lg shadow-sm bg-gray-100">
//                             <h3 className="text-lg font-semibold">📧 Email</h3>
//                             <p className="text-gray-700 mt-1">contact@tastybites.com</p>
//                         </div>
//                     </div>
//                     <div className="text-right mt-4">
//                         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600">
//                             Edit Details
//                         </button>
//                     </div>
//                 </section>

//                 {/* Menu Management */}
//                 <section className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
//                     <h2 className="text-2xl font-semibold text-gray-800 mb-4">🍽️ Menu Management</h2>
//                     <div className="grid md:grid-cols-3 gap-6">
//                         <div className="p-4 border rounded-lg shadow-md bg-white">
//                             <img
//                                 src="https://via.placeholder.com/150"
//                                 alt="Dish 1"
//                                 className="w-full h-32 object-cover rounded-lg"
//                             />
//                             <h3 className="text-lg font-semibold mt-2">Spicy Pizza</h3>
//                             <div className="mt-2 flex justify-between">
//                                 <button className="text-blue-500 hover:underline">Edit</button>
//                                 <button className="text-red-500 hover:underline">Delete</button>
//                             </div>
//                         </div>
//                         <div className="p-4 border rounded-lg shadow-md bg-white">
//                             <img
//                                 src="https://via.placeholder.com/150"
//                                 alt="Dish 2"
//                                 className="w-full h-32 object-cover rounded-lg"
//                             />
//                             <h3 className="text-lg font-semibold mt-2">Classic Burger</h3>
//                             <div className="mt-2 flex justify-between">
//                                 <button className="text-blue-500 hover:underline">Edit</button>
//                                 <button className="text-red-500 hover:underline">Delete</button>
//                             </div>
//                         </div>
//                         <div className="p-4 border rounded-lg shadow-md bg-white">
//                             <img
//                                 src="https://via.placeholder.com/150"
//                                 alt="Dish 3"
//                                 className="w-full h-32 object-cover rounded-lg"
//                             />
//                             <h3 className="text-lg font-semibold mt-2">Pasta Delight</h3>
//                             <div className="mt-2 flex justify-between">
//                                 <button className="text-blue-500 hover:underline">Edit</button>
//                                 <button className="text-red-500 hover:underline">Delete</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="text-right mt-4">
//                         <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600">
//                             Add New Dish
//                         </button>
//                     </div>
//                 </section>

//                 {/* Order Management */}
//                 <section className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
//                     <h2 className="text-2xl font-semibold text-gray-800 mb-4">📦 Order Management</h2>
//                     <p className="text-gray-700">You have <strong>5 new orders</strong> pending.</p>
//                     <div className="text-right mt-4">
//                         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600">
//                             View Orders
//                         </button>
//                     </div>
//                 </section>

//                 {/* Call to Action */}
//                 <div className="text-center mt-10">
//                     <a href="/dashboard">
//                         <button className="bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:shadow-lg hover:bg-gray-800">
//                             Go to Dashboard
//                         </button>
//                     </a>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default OwnerProfile;
