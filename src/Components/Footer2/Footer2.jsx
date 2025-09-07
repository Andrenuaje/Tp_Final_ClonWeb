import './Footer2'

const Footer2 = () => {
    return (
        <section className="bg-teal-800 py-16 font-bogart relative overflow-hidden">
            {/* Decorative wavy patterns */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-8 w-32 h-32 bg-teal-300 rounded-full blur-3xl"></div>
                <div className="absolute top-12 right-16 w-24 h-24 bg-teal-400 rounded-full blur-2xl"></div>
                <div className="absolute bottom-8 left-1/4 w-20 h-20 bg-teal-300 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-1/3 w-28 h-28 bg-teal-400 rounded-full blur-2xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex items-center justify-between">
                    {/* Left side - Text content */}
                    <div className="flex-1">
                        <h2 className="text-5xl font-bold text-white leading-tight">
                            Let's Help Other With<br />
                            Your Charity
                        </h2>
                    </div>
                    
                    {/* Right side - Call to action button */}
                    <div className="flex-shrink-0 ml-8">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Footer2 }