import type React from "react"
import { FaCode, FaGlobe, FaServer, FaDatabase, FaTools, FaCog } from "react-icons/fa"

const iconMap: Record<string, React.ComponentType<any>> = {
  FaCode,
  FaGlobe,
  FaServer,
  FaDatabase,
  FaTools,
  FaCog,
}

const colorSchemes = [
  "from-slate-600 to-gray-600",
  "from-gray-600 to-slate-700",
  "from-slate-700 to-gray-700",
  "from-gray-700 to-slate-600",
]

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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-2xl border border-gray-100">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-600 to-gray-600"></div>

      <div className="bg-gradient-to-r from-slate-800 to-gray-800 text-white px-6 sm:px-8 lg:px-10 py-6 md:py-8">
        <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold">
          <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
            <FaCode className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          TECHNICAL SKILLS
        </h3>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.values(technicalSkills).map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || FaCog
            const colorScheme = colorSchemes[index % colorSchemes.length]

            return (
              <div key={skill.id} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${colorScheme} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300`}
                ></div>

                <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${colorScheme} rounded-xl text-white shadow-lg`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-800">{skill.title}</h4>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {skill.skills.map((item, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="group/skill relative overflow-hidden px-4 py-2 bg-gray-50 hover:bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 hover:shadow-md hover:scale-105 cursor-default"
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}
                        ></div>
                        <span className="relative">{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
