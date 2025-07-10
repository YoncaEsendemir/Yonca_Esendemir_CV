import { FaBriefcase, FaCalendarAlt, FaGraduationCap,FaAward } from "react-icons/fa";

interface Education {
    department: string
    name: string
    graduationYear?: string
    graduationYearStyle?: string
};
// Ana 'education' nesnesini tanımlayan interface


interface WorkExperience {
    name: string,
    position: string,
    time: string,
    description: string
}

interface Language {
    name: string,
    level: string
}

interface Certificate {
    id: number,
    certificate: string
}

interface BottomSectionProps {
    workExperience: WorkExperience[],
    education: Education[],
    languages: Language[],
    certificates: Certificate[]
}


export default function BottomSection({ workExperience, education, languages, certificates }: BottomSectionProps) {
    return (
        <div className=" mt-4 sm:mt-6 lg:mt-8 gird grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 ">
            {/* Work Experience */}
            <div className="bg-white shadow-xl border-0 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4 sm:px-6 lg:px-8 py-4 md:py-6">
                    <h3 className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-semibold">
                        <FaBriefcase className="w-5 h-5 md:w-6 md:h-6" />
                        WORK EXPERIENCE
                    </h3>
                </div>
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {
                        workExperience.map((work,index)=>(
                            <div key={index} className="border-l-4 border-blue-600 pl-3 sm:pl-4 bg-blue-50 p-3 sm:p-4 rounded-r-lg hover:bg-blue-100 transition-colors">
                            <h4 className="font-bold text-sm sm:text-base lg:text-lg text-blue-800">{work.name}</h4>
                            <p className="text-blue-700 font-medium text-xs sm:text-sm lg:text-base">{work.position}</p>
                            <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2 mt-1">
                                <FaCalendarAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                                {work.time}
                            </p>
                            <p className="text-gray-700 mt-2 sm:mt-3 leading-relaxed text-xs sm:text-sm">{work.description}</p>
                        </div>
                        )
                    )
                    }

                </div>
            </div>

            {/* Right Column - Education, Languages & Certificates */}
            <div className="mt-4 sm:mt-6 lg:mt-8 space-y-4 sm:space-y-6">
                {/*Education */}
                <div className="bg-white shadow-lg border-0 rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 sm:px-6 py-4 sm:py-6">
                        <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold">
                            <FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                            EDUCATION
                        </h3>
                    </div>

                    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                        {
                            education.map((edu,index)=>(
                                <div key={index} className="border-l-4 border-blue-600 pl-3 sm:pl-4 hover:bg-blue-50 p-2 rounded-r transition-colors">
                                <h4 className="font-bold text-blue-900 text-sm sm:text-base">{edu.department}</h4>
                                <p className="text-sm text-gray-800">{edu.name}</p>
                                {
                                    edu.graduationYear &&(
                                        <p className={`mt-1 ${edu.graduationYearStyle ?? "text-xs text-gray-500"}`}> {edu.graduationYear}</p>
                                    )
                                }
                            </div>
                            ))
                        }
                    </div>

                    </div>
                    {/* Languages & Certificates - Side by Side on Desktop */}
                    <div className="mt-4 sm:mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        {/*Language */}
                        <div className="bg-white shadow-lg border-0 rounded-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 sm:px-6 py-3 sm:py-4">
                            <h3 className="text-base sm:text-lg font-semibold">LANGUAGES</h3>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="space-y-3 sm:space-y-5">
                                    {
                                        languages.map((language,index)=>(
                                            <div key={index} className="flex justify-between items-center hover:bg-blue-100 p-2 rounded transition-colors">
                                            <span className="font-medium text-sm sm:text-base">{language.name}</span>
                                            <span className="font-medium text-sm sm:text-base">{language.level}</span>
                                        </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg border-0 rounded-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 sm:px-6 py-3 sm:py-4">
                               <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold">
                               <FaAward className="w-4 h-4 sm:w-5 sm:h-5" />
                               CERTIFICATES
                               </h3>
                            </div>
                            <div className="p-2 sm:p-6">
                                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                                    {certificates.map((certificate)=>(
                                    <div key={certificate.id} className="flex items-start gap-2 hover:bg-blue-50 p-2 rounded transition-colors">
                                    <FaAward className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm sm:text-base">{certificate.certificate}</span>
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
