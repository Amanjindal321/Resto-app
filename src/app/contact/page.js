const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-purple-100 text-gray-900">
            {/* Header */}
            <header className="bg-gray-600 text-white py-4 fixed top-0 w-full shadow-lg">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-3xl font-extrabold">Contact Us</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow mt-16 px-6 py-10">
                {/* Contact Info */}
                <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 transition hover:shadow-2xl text-center">
                    <h2 className="text-4xl font-bold text-black-700 mb-4">Get in Touch</h2>
                    <p className="text-gray-700 text-lg">
                        Have questions or feedback? We'd love to hear from you!
                    </p>

                    <div className="mt-6 grid md:grid-cols-3 gap-6">
                        <div className="p-6 border rounded-lg bg-gray-200 hover:scale-105 transition">
                            <h3 className="text-2xl font-semibold text-black-700">📍 Location</h3>
                            <p className="text-gray-700 mt-2">123 Food Street,  City</p>
                        </div>
                        <div className="p-6 border rounded-lg bg-gray-200 hover:scale-105 transition">
                            <h3 className="text-2xl font-semibold text-black-700">📞 Phone</h3>
                            <p className="text-gray-700 mt-2">+123 456 7890</p>
                        </div>
                        <div className="p-6 border rounded-lg bg-gray-200 hover:scale-105 transition">
                            <h3 className="text-2xl font-semibold text-black-700">📧 Email</h3>
                            <p className="text-gray-700 mt-2">support@restaurant.com</p>
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-4xl font-bold text-center mb-4 text-indigo-700">Send Us a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-lg font-semibold text-gray-700">Name</label>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-semibold text-gray-700">Email</label>
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-semibold text-gray-700">Message</label>
                            <textarea 
                                rows="4" 
                                placeholder="Your Message" 
                                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition">
                            Send Message 🚀
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Contact;
