import './Footer'

const Footer = () => {
    return (
        <div className="bg-yellow-50 py-16 font-bogart">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                   
                    <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-6">Newsletter</h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            Subscribe to our newsletter to get more informations
                        </p>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="flex-1 border border-gray-300 px-4 py-3 rounded-l text-sm focus:outline-none focus:border-teal-500 bg-white"
                            />
                            <button className="bg-[#00715D] text-white px-6 py-3 rounded-r text-sm font-semibold hover:bg-teal-700 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>

                   
                    <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-6">Navigation</h3>
                        <div className="space-y-3">
                            <a href="#" className="block text-gray-600 text-sm hover:text-gray-800 transition-colors">Home</a>
                            <a href="#" className="block text-gray-600 text-sm hover:text-gray-800 transition-colors">Campaign</a>
                            <a href="#" className="block text-gray-600 text-sm hover:text-gray-800 transition-colors">Team</a>
                        </div>
                    </div>

                    
                    <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-6">About Us</h3>
                        <div className="space-y-3">
                            <a href="#" className="block text-gray-600 text-sm hover:text-gray-800 transition-colors">About Us</a>
                            <a href="#" className="block text-gray-600 text-sm hover:text-gray-800 transition-colors">Contact</a>
                            <a href="#" className="block text-gray-600 text-sm hover:text-gray-800 transition-colors">Address</a>
                        </div>
                    </div>

                    
                    <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-6">Help</h3>
                        <div className="space-y-3">
                            <a href="#" className="block text-gray-600 text-sm hover:text-gray-800 transition-colors">Donor Guide</a>
                            <a href="#" className="block text-gray-600 text-sm hover:text-gray-800 transition-colors">FAQ</a>
                            <a href="#" className="block text-gray-600 text-sm hover:text-gray-800 transition-colors">We Are Hiring</a>
                            <a href="#" className="block text-gray-600 text-sm hover:text-gray-800 transition-colors">Returns</a>
                        </div>
                    </div>
                </div>

                
                <div className="border-t border-gray-300 pt-8">
                    <div className="flex justify-between items-center text-sm text-gray-600">
                        <p>Designed By Tanim Khan</p>
                        <p>WWW.Dribbble.Com/Tanim_ui</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Footer }