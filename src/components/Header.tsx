import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa"
import resim from "../image/cv_bilder.jpg"

interface ContactDetails {
  name: string
  title: string
  phone: string
  email: string
  address: string
  linkedin: {
    url: string
    userName: string
  }
  github: {
    url: string
    userName: string
  }
}

interface ContactProps {
  contactDetails: ContactDetails
}

export default function Header({ contactDetails }: ContactProps) {
  return (
    // Header'ı daha koyu ve şık yap
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 p-1">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-gray-700/30 backdrop-blur-3xl"></div>

      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-slate-600 to-gray-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <img
                src={resim}
                alt="Yonca Esendemir Profile Photo"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-white/20 shadow-2xl object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
              {contactDetails.name}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-8 text-gray-300">
              {contactDetails.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white/90">
              <div className="group flex items-center justify-center lg:justify-start gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                <FaPhone className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                <span className="text-sm lg:text-base">{contactDetails.phone}</span>
              </div>

              <div className="group flex items-center justify-center lg:justify-start gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                <FaEnvelope className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                <span className="text-sm lg:text-base break-all sm:break-normal">{contactDetails.email}</span>
              </div>

              <div className="group flex items-center justify-center lg:justify-start gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                <FaMapMarkerAlt className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                <span className="text-sm lg:text-base">{contactDetails.address}</span>
              </div>

              <div className="group flex items-center justify-center lg:justify-start gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                <FaGithub className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                <a
                  href={contactDetails.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm lg:text-base break-all sm:break-normal hover:text-gray-200 transition-colors"
                >
                  {contactDetails.github.userName}
                </a>
              </div>

              <div className="group flex items-center justify-center lg:justify-start gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 sm:col-span-2 lg:col-span-1">
                <FaLinkedin className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                <a
                  href={contactDetails.linkedin.url}
                  className="text-sm lg:text-base break-all sm:break-normal hover:text-gray-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactDetails.linkedin.userName}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
