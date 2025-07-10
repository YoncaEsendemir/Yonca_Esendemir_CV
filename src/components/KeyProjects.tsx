import type React from "react"
import { FaCode, FaStar, FaRocket, FaBook, FaBookOpen } from "react-icons/fa"

const iconMap: Record<string, React.ComponentType<any>> = {
  FaStar,
  FaRocket,
  FaBook,
  FaBookOpen,
  FaCode,
}

interface Additional {
  title: string
  description: string
  icon: string
  contents: string
}

interface Version {
  name: string
  technologies: string[]
  features: string[]
}

interface KeyProjectsCours {
  id: number
  title: string
  description: string
  icon: string
  versions: Version[]
}

interface KeyProjects {
  id: number
  title: string
  technologies: string[]
  icon: string
  features: string[]
}

interface ProjectFeature {
  title: string
  detail: string
}

interface ProKeyProjects {
  id: number
  title: string
  description: string
  icon: string
  technologies: string[]
  features: ProjectFeature[]
  categories: string[]
}

interface KeyProjectsProps {
  additional: Additional
  keyProjectsCours: KeyProjectsCours[]
  keyProjects: KeyProjects[]
  prokeyProjects: ProKeyProjects[] // Fixed: matching the prop name from App.tsx
}

export default function KeyProjects({ additional, keyProjectsCours, keyProjects, prokeyProjects }: KeyProjectsProps) {
  return (
    <div className="mt-4 sm:mt-6 md:mt-7 lg:mt-8 bg-white shadow-xl border-0 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <h3 className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-semibold">
          <FaCode className="w-5 h-5 md:w-6 md:h-6" />
          KEY PROJECTS
        </h3>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
        {/* Professional Key Projects */}
        {prokeyProjects.map((project) => {
          const IconComponent = iconMap[project.icon] || FaCode
          return (
            <div
              key={project.id}
              className="bg-gradient-to-r from-blue-50 to-blue-200 p-4 sm:p-6 rounded-xl border-l-4 sm:border-l-8 border-blue-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <IconComponent className="w-6 h-6 text-blue-700" />
                <h4 className="font-bold text-lg sm:text-xl lg:text-2xl text-blue-900">{project.title}</h4>
              </div>

              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-700 text-white hover:bg-blue-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold text-lg">•</span>
                    <span className="text-sm lg:text-base">
                      <strong>{feature.title}:</strong> {feature.detail}
                    </span>
                  </div>
                ))}
              </div>

              {project.categories && project.categories.length > 0 && (
                <div className="mt-4">
                  <h5 className="font-semibold text-blue-800 mb-2">Categories:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {/* E-Learning Platforms */}
        {keyProjectsCours.map((course) => {
          const IconComponent = iconMap[course.icon] || FaBookOpen
          return (
            <div
              key={course.id}
              className="bg-gradient-to-r from-blue-50 to-blue-200 p-4 sm:p-6 rounded-xl border-l-4 sm:border-l-8 border-blue-600 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <IconComponent className="w-6 h-6 text-blue-600" />
                <h4 className="font-bold text-lg sm:text-xl lg:text-2xl text-blue-900">{course.title}</h4>
              </div>

              <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">{course.description}</p>

              <div className="space-y-4">
                {course.versions.map((version, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-blue-200">
                    <h5 className="font-semibold text-blue-800 mb-2">{version.name}</h5>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {version.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-600 text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="text-sm space-y-1">
                      {version.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className="text-green-500 font-bold">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* Other Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {keyProjects.map((project) => {
            const IconComponent = iconMap[project.icon] || FaCode
            return (
              <div
                key={project.id}
                className="bg-gradient-to-r from-blue-50 to-blue-200 p-4 sm:p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <IconComponent className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-base sm:text-lg lg:text-xl text-blue-800">{project.title}</h4>
                </div>

                <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-600 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="text-xs sm:text-sm space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Additional Projects Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-300 p-4 sm:p-6 rounded-xl border-l-4 sm:border-l-8 border-blue-500 hover:shadow-lg transition-shadow">
          <h4 className="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 text-blue-900">{additional.title}</h4>
          <p className="text-gray-700 mb-2 text-sm sm:text-base">{additional.description}</p>
          <p className="text-gray-600 italic text-xs sm:text-sm">{additional.contents}</p>
        </div>
      </div>
    </div>
  )
}
