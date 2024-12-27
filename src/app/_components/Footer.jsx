const Footer=()=>{
    return(
        <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} My Company. All Rights Reserved.</p>
                <div className="mt-2 space-x-4">
                    <a href="/privacy" className="text-green-400 hover:underline">
                        Privacy Policy
                    </a>
                    <span className="text-gray-500">|</span>
                    <a href="/terms" className="text-green-400 hover:underline">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;