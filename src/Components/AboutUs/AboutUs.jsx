import './AboutUs'

const AboutUs = () => {
      return(
    <div className="bg-[#F9F4E8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-16">
         
          <div className="flex-1 flex justify-center">
            <div className="relative">
              
              <div className="w-96 h-96 rounded-t-full overflow-hidden shadow-xl bg-[#F9F4E8]rounded-b-lg ">
                <img 
                  src="../src/img/voluntarios.jpg" 
                  alt="Team members - man and woman smiling"
                  className="w-full h-full object-cover"
                />
              </div>
              
              
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-px bg-[#F9F4E8]"></div>
              </div>
            </div>
          </div>

          
          <div className="flex-1 max-w-lg font-bogart">
            <h2 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
              About Us
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              The legal definition of a charitable organization (and of charity) varies between countries and in some instances regions of the country. The regulation, the tax treatment, and the way in which charity law affects charitable organizations also vary.
            </p>
            
            <button className="bg-transparent border-b-2 border-gray-800 text-gray-800 pb-1 font-semibold hover:border-gray-600 hover:text-gray-600 transition-colors">
              Read More
            </button>
          </div>
        </div>
        
        
        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-4xl h-px bg-gray-300"></div>
        </div>
      </div>
    </div>
      )

}

export{AboutUs}