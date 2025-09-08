import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Estadisticas } from './Components/Estadistica/Estadisticas'
import { Noticias } from './Components/Noticias/Noticias'

import { AboutUs } from './Components/AboutUs/AboutUs'

import { Comentarios } from './Components/Comentarios/Comentarios'
import { Footer2 } from './Components/Footer2/Footer2'
import { Footer } from './Components/Footer/Footer'
import { OurTeam } from './Components/OurTeam/OurTeam'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className="relative min-h-screen">
      
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-[#F9F4E8]"></div>
        <div className="w-1/2 bg-gradient-to-br from-[#FDD65B] via-[#FDD65B] to-[#FDD65B]"></div>
      </div>
      
      
      <div className="relative z-10">
        
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto font-bogart">
          <div className="flex items-center">
            <img 
              src="../src/img/logo.png" 
              alt="Ta: Logo" 
              className="h-20 w-auto"
            />
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">About Us</a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Campaign</a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Contact Us</a>
          </div>
        </nav>

        
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-12">
          
          <div className="flex-1 pr-12 font-bogart">
            <h1 className="text-6xl font-bold text-gray-800 leading-tight mb-8">
              Charity Is An<br />
              Act Of A Soft<br />
              Heart.
            </h1>
            
            <p className="text-gray-700 text-lg mb-12 max-w-md leading-relaxed">
              We've spent the last 5 years helping over 25,00000 
              teams just like yourself create and sustain 
              successful online support.
            </p>

            
            <div className="flex items-center space-x-6 mb-16">
              <button className="bg-[#00715D] hover:bg-green-700 text-white px-8 py-3 rounded font-semibold transition-colors font-bogart">
                Donate Now
              </button>
              
              
            <button className='cursor-pointer flex items-center'>
              <div className="relative">
                <div className="w-16 h-16 bg-[#FDD65B] rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-200 transition-colors">
                  <span className="text-gray-800 text-xl flex items-center justify-center">▷</span>
                </div>
              
                
                <div className="absolute -inset-6 rounded-full">
                  <svg className="w-full h-full" viewBox="0 0 120 120">
                    <path
                      id="circle-path"
                      d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                      fill="none"
                      stroke="none"
                    />
                    <text className="text-xs font-medium fill-gray-600 font-bogart" style={{ fontSize: '10px', letterSpacing: '3px' }}>
                      <textPath href="#circle-path" startOffset="0%">
                        Learn about us through this video
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
              </button>
            </div>
            

            
            <div className="flex space-x-8 font-bogart">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Youtube</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Facebook</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Instagram</a>
            </div>
          </div>

          
          <div className="flex-1 relative ">
            <div className="relative  shadow-2xl ">
              <img 
                src="../src/img/1.jpg"
                alt=""
                className=" w-full  object-cover h-full  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  

      
    <Estadisticas/>
    <Noticias/>
    <AboutUs/>
    <OurTeam/>
    <Comentarios/>
    <Footer2/>
    <Footer/>
    </>
  )
}

export default App
