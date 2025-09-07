import './Comentarios'

const Comentarios=()=>{
    return(
        <div className="bg-[#F9F4E8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-16">
          
          <div className="flex-1">
            <div className="relative max-w-md">
              
              <div className="w-80 h-80 bg-[#FDD65B] overflow-hidden" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}>
               
                <div className="w-full h-full flex items-center justify-center p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Mustafa Kamal - smiling man with glasses and bow tie"
                    className="w-64 h-64 rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>
              
             
              <div className="absolute top-4 left-4 bg-[#00715D] text-white px-3 py-2 rounded-lg flex items-center space-x-1 shadow-lg font-bogart">
                <div className="w-4 h-4 fill-current" />
                <span className="font-semibold">⭐5.0</span>
              </div>
            </div>
          </div>

          
          <div className="flex-1 max-w-lg font-bogart">
          
            <blockquote className="text-gray-700 text-xl mb-8 leading-relaxed font-light">
              "We're very happy that the challenge went well, and we're grateful that we have a partner in Charity Challenge whom we could trust to take the best possible care of our supporters."
            </blockquote>
            
           
            <div className="mb-8">
              <h3 className="font-bold text-gray-800 text-xl mb-1">Mustafa Kamal</h3>
              <p className="text-gray-500 text-sm">Ceo, Toogle</p>
            </div>

            
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#FDD65B] transition-colors shadow-sm border border-gray-200">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#FDD65B] transition-colors shadow-sm border border-gray-200">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export{Comentarios}