import { FaCode, FaStar,FaRocket,FaBook,FaBookOpen} from "react-icons/fa";
{/*Main Content */}

const iconMap:Record<string, React.ComponentType<any>>={
  FaStar,
  FaRocket,
  FaBook,
  FaBookOpen,
}

export default function KeyProjects(){
  return(
    <div className="mt-4 sm:mt-6 md:mt-7 lg:mt-8 bg-white shadow-xl border-0 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700  text-white px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <h3 className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-semibold">
        <FaCode className="w-5 h-5 md:w-6 md:h-6"/>
        KEY PROJECTS
        </h3>
      </div>
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
          {/*Ayyıldız Haber Ajans */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl border-l-4
          sm:border-l-8 border-blue-700 hover:shadow-lg transition-shadow">
            <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-blue-900"></h4>
            <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg leading-relaxed"></p>
          <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
            <span  className="inline-flex items px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-700 text-white hover:bg-blue-600"></span>
          </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm lg:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold text-lg">•</span>
                  <span className="text-medium"> <strong></strong></span>
                </li>
              </ul>

              <ul className="space-y-2 text-sm lg:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold text-lg">•</span>
                  <span className="text-medium"> <strong></strong></span>
                </li>
              </ul>
            </div>
          </div>

          {/* E-Learning Platforms */}
          <div>
            <h4></h4>
            <p></p>
            <div>
              <div>
                <h5></h5>
              </div>
            </div>
          </div>


          {/* Other Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 text-blue-800"></h4>
              <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-600 text-white"></span>
              </div>
              <ul className="text-xs sm:text-sm space-y-1">
                <li>•</li>
              </ul>
            </div>
          </div>

       <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl border-l-4 sm:border-l-8 border-blue-800 hover:shadow-lg transition-shadow">
        <h4 className="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 text-blue-900"></h4>
        <p className="text-gray-700 mb-2 text-sm sm:text-base"></p>
        <p className="text-gray-600 italic text-xs sm:text-sm"></p>
      </div>

        </div>
    </div>
  )
}
