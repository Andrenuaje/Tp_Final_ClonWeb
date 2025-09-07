import './Noticias'

const Noticias = () => {
     return(
         <div className="bg-[#F9F4E8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between gap-16">
         
          <div className="flex-1 max-w-lg font-bogart">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Support Your<br />
              Community
            </h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              The legal definition of a charitable organization (and of charity) varies between countries and in 
              some charity law affects charitable organizations; also vary.
            </p>
            
           
            <div className="grid grid-cols-2 gap-6 mb-8">
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-pink-200 h-40 p-6 flex items-center justify-center relative">
                 
                  <div className="space-y-4">
                    <div className="w-1 h-16 bg-blue-400 rounded-full transform -rotate-12 mx-auto"></div>
                    <div className="w-1 h-12 bg-blue-600 rounded-full transform rotate-12 mx-auto"></div>
                  </div>
                </div>
                <div className="p-4 font-bogart">
                  <h3 className="font-semibold text-gray-800">Covid - 19</h3>
                </div>
              </div>

              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gray-200 h-40 p-6 flex items-center justify-center">
                  
                  <div className="relative">
                    <div className="w-16 h-12 bg-amber-100 rounded-sm border-2 border-amber-200 relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-4 border-2 border-amber-200 rounded-t-lg bg-transparent"></div>
                      </div>
                     
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                        <div className="w-2 h-6 bg-green-500 rounded-full"></div>
                        <div className="absolute top-3 -left-1 w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="absolute top-3 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 font-bogart">
                  <h3 className="font-semibold text-gray-800">Food Bank</h3>
                </div>
              </div>
            </div>

           
            
          </div>

          
          <div className="flex-1 max-w-sm">
           
            <div className="relative mb-6">
              <img 
                src="../src/img/main1.png" 
                alt="Safe Water - Person with water container"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            
           
            <div className="flex items-center justify-between font-bogart">
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800">Safe Water</h3>
              </div>
              
              <button className="text-[#00715D] font-semibold flex items-center hover:text-green-700 transition-colors group font-bogart">
                <span className="text-gray-700 font-medium">View All Campaigns</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
 
     )

}

export {Noticias}