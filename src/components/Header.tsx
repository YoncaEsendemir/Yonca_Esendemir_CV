
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

interface ContactDetails{
  name:string;
  title:string;
  phone:string;
  email:string;
  address:string;
  linkedin:{
    url:string;
    userName:string;
  };
  github:{
    url:string;
    userName:string;
  };
}

interface ContactProps {
  contactDetails:ContactDetails;
}

export default function Header({contactDetails}:ContactProps) {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-t-xl md:rounded-t-2xl shadow-2xl">
    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
      {/* Profile Photo */}
      <div className="flex-shrink-0">
        <div className="relative">
          <img
            src="/placeholder.svg?height=200&width=200"
            alt="Yonca Esendemir Profile Photo"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full border-4 sm:border-6 border-white/20 shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-3 tracking-wide">
          {contactDetails.name}
        </h1>
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light mb-4 md:mb-6 text-blue-100">
          {contactDetails.title}
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-blue-100">
          <div className="flex items-center justify-center gap-2 bg-blue-800/30 px-3 md:px-4 py-2 rounded-full hover:bg-blue-800/50 transition-colors text-xs sm:text-sm lg:text-base">
            <FaPhone className="w-3 h-3 md:w-4 md:h-4" />
            <span>{contactDetails.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-blue-800/30 px-3 md:px-4 py-2 rounded-full hover:bg-blue-800/50 transition-colors text-xs sm:text-sm lg:text-base">
            <FaEnvelope className="w-3 h-3 md:w-4 md:h-4" />
            <span className="break-all sm:break-normal">{contactDetails.email}</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-blue-800/30 px-3 md:px-4 py-2 rounded-full hover:bg-blue-800/50 transition-colors text-xs sm:text-sm lg:text-base">
            <FaMapMarkerAlt className="w-3 h-3 md:w-4 md:h-4" />
            <span>{contactDetails.address}</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-blue-800/30 px-3 md:px-4 py-2 rounded-full hover:bg-blue-800/50 transition-colors text-xs sm:text-sm lg:text-base">
            <FaGithub className="w-3 h-3 md:w-4 md:h-4" />
            <a href={contactDetails.github.url} target="_blank" rel="noopener noreferrer" className="break-all sm:break-normal">{contactDetails.github.userName}</a>
          </div>
          <div className="flex items-center justify-center gap-2 bg-blue-800/30 px-3 md:px-4 py-2 rounded-full hover:bg-blue-800/50 transition-colors text-xs sm:text-sm lg:text-base">
            <FaLinkedin className="w-3 h-3 md:w-4 md:h-4" />
            <a href={contactDetails.linkedin.url} className="break-all sm:break-normal" target="_blank" rel="noopener noreferrer">{contactDetails.linkedin.userName}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
