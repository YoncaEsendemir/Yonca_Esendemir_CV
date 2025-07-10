import { FaCode, FaGlobe, FaServer, FaDatabase, FaTools, FaCog } from 'react-icons/fa'

const iconMap: Record<string, React.ComponentType<any>> = {
  FaCode,
  FaGlobe,
  FaServer,
  FaDatabase,
  FaTools,
  FaCog,
}

interface SkillSection {
  id: number
  title: string
  icon: string
  teaxtColor: string
  skills: string[]
}

interface TechnicalSkillsProps {
  technicalSkills: Record<string, SkillSection>
}

export default function TechnicalSkills({ technicalSkills }: TechnicalSkillsProps) {
  return (
    <div className="mt-4 sm:mt-6 lg:mt-8 space-y-4 sm:space-y-6 lg:space-y-8">
      <div className="bg-white shadow-xl border-0 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <h3 className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-semibold">
            <FaCode className="w-5 h-5 md:w-6 md:h-6" />
            TECHNICAL SKILLS
          </h3>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(technicalSkills).map((skill) => {
              const IconComponent = iconMap[skill.icon] || FaCog
              return (
                <div key={skill.id} className="space-y-3">
                  <h4 className="font-bold text-base lg:text-lg flex items-center gap-2 text-blue-800">
                    <IconComponent className="w-4 h-4 lg:w-5 lg:h-5" />
                    {skill.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${skill.teaxtColor} transition-colors cursor-default`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
