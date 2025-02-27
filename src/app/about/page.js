
const About = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-blue-100 text-gray-900 ">
            {/* Header */}
            <header className="bg-gray-700 text-white py-4 fixed top-0 w-full shadow-lg">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-3xl font-extrabold">About Us</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow mt-16 px-6 py-10">
                {/* About Section */}
                <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 transition hover:shadow-2xl">
                    <h2 className="text-4xl font-bold text-center mb-4 text-black-700">Who We Are</h2>
                    <p className="text-gray-700 text-lg text-center">
                        We are a passionate team of food lovers bringing you delicious meals, made from fresh 
                        ingredients, delivered right to your doorstep. Your satisfaction is our priority.
                    </p>
                </section>

                {/* Services Section */}
                <section className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-4xl font-bold text-center mb-4 text-black-600">What We Offer</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 border rounded-lg shadow-md bg-gradient-to-b from-green-200 to-green-100 hover:scale-105 transition">
                            <h3 className="text-2xl font-semibold text-green-700"> Fast Delivery</h3>
                            <p className="text-gray-700 mt-2">Get your food delivered in record time.</p>
                        </div>
                        <div className="p-6 border rounded-lg shadow-md bg-gradient-to-b from-yellow-200 to-yellow-100 hover:scale-105 transition">
                            <h3 className="text-2xl font-semibold text-yellow-700"> Fresh Ingredients</h3> 
                            <p className="text-gray-700 mt-2">Only the best and freshest ingredients in every meal.</p>
                        </div>
                        <div className="p-6 border rounded-lg shadow-md bg-gradient-to-b from-pink-200 to-pink-100 hover:scale-105 transition">
                            <h3 className="text-2xl font-semibold text-pink-700"> Wide Variety</h3>
                            <p className="text-gray-700 mt-2">Explore a diverse range of delicious cuisines.</p>
                        </div>
                    </div>
                </section>
                {/* 🥗 🍽️ 🚀*/}
                {/* Contact Section */}
                <section className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-4xl font-bold mb-4 text-indigo-600">Contact Us</h2>
                    <p className="text-lg text-gray-700"> 123 Food Street,  City</p> 
                    <p className="text-lg text-gray-700"> +123 456 7890</p>
                    <p className="text-lg text-gray-700"> support@.com</p>
                </section>
                {/* 📍📞📧 */}
                {/* Call to Action */}
                <div className="text-center mt-10">
                    <a href="/">
                        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition">
                            Order Now 
                        </button> 
                        {/* 🍕 */}
                    </a>
                </div>
            </main>
        </div>
    );
};

export default About;
