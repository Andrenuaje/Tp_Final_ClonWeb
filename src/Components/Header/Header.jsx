import './Header'
const Header = () => {
    return(
     
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto font-bogart">
        <div className="text-2xl font-bold text-gray-800">
          
        </div>
        <div className="flex space-x-8">
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">About Us</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Campaign</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Contact Us</a>
        </div>
      </nav>

      
    )
}
export { Header }