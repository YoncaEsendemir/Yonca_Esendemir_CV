import { FaBriefcase, FaCalendarAlt, FaGraduationCap, FaAward, FaLanguage } from "react-icons/fa"

interface Education {
  department: string
  name: string
  graduationYear?: string
  graduationYearStyle?: string
}

interface WorkExperience {
  name: string
  position: string
  time: string
  description: string
}

interface Language {
  name: string
  level: string
}

interface Certificate {
  id: number
  certificate: string
}

interface BottomSectionProps {
  workExperience: WorkExperience[]
  education: Education[]
  languages: Language[]
  certificates: Certificate[]
}

export default function BottomSection({ workExperience, education, languages, certificates }: BottomSectionProps) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {/* Work Experience */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-2xl border border-gray-100">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-600 to-gray-600"></div>

        <div className="bg-gradient-to-r from-slate-800 to-gray-800 text-white px-6 sm:px-8 py-6 md:py-8">
          <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
              <FaBriefcase className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            WORK EXPERIENCE
          </h3>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {workExperience.map((work, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>

              <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-600 to-gray-600 rounded-l-2xl"></div>

                <div className="pl-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{work.name}</h4>
                  <p className="text-slate-700 font-semibold mb-2">{work.position}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mb-3">
                    <FaCalendarAlt className="w-4 h-4 text-slate-600" />
                    {work.time}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{work.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Education, Languages & Certificates */}
      <div className="space-y-8">
        {/* Education */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-2xl border border-gray-100">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-600 to-slate-700"></div>

          <div className="bg-gradient-to-r from-gray-800 to-slate-800 text-white px-6 sm:px-8 py-6">
            <h3 className="flex items-center gap-3 text-xl font-bold">
              <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
                <FaGraduationCap className="w-5 h-5" />
              </div>
              EDUCATION
            </h3>
          </div>

          <div className="p-6 space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-slate-700 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>

                <div className="relative bg-white rounded-xl p-4 border border-gray-100 shadow-md">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-600 to-slate-700 rounded-l-xl"></div>

                  <div className="pl-4">
                    <h4 className="font-bold text-gray-800 text-lg">{edu.department}</h4>
                    <p className="text-gray-700 font-medium">{edu.name}</p>
                    {edu.graduationYear && (
                      <p className="mt-2 text-sm text-gray-600 font-medium">📅 {edu.graduationYear}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Certificates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-6">
          {/* Languages */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-xl border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-700 to-gray-700"></div>

            <div className="bg-gradient-to-r from-slate-800 to-gray-800 text-white px-6 py-4">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <FaLanguage className="w-4 h-4" />
                </div>
                LANGUAGES
              </h3>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div
                    key={index}
                    className="group flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <span className="font-semibold text-gray-800 text-base">{language.name}</span>
                    <span className="px-4 py-2 bg-gradient-to-r from-slate-700 to-gray-700 text-white rounded-lg text-sm font-bold shadow-md">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-xl border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-700 to-slate-600"></div>

            <div className="bg-gradient-to-r from-gray-800 to-slate-800 text-white px-6 py-4">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <FaAward className="w-4 h-4" />
                </div>
                CERTIFICATES
              </h3>
            </div>

            <div className="p-6">
              <div className="space-y-3">
                {certificates.map((certificate) => (
                  <div
                    key={certificate.id}
                    className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-2 bg-gradient-to-r from-gray-700 to-slate-600 rounded-lg flex-shrink-0">
                      <FaAward className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed font-medium">{certificate.certificate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
