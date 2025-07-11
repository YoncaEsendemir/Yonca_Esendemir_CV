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
  prokeyProjects: ProKeyProjects[]
}

export default function KeyProjects({ additional, keyProjectsCours, keyProjects, prokeyProjects }: KeyProjectsProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-2xl border border-gray-100">
      {/* Top border'ı güncelle */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-600 to-gray-600"></div>

      {/* Header'ı güncelle */}
      <div className="bg-gradient-to-r from-slate-800 to-gray-800 text-white px-6 sm:px-8 lg:px-10 py-6 md:py-8">
        <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold">
          <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
            <FaCode className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          KEY PROJECTS
        </h3>
      </div>

      <div className="p-6 sm:p-8 lg:p-10 space-y-8">
        {/* Professional Key Projects */}
        {prokeyProjects.map((project) => {
          const IconComponent = iconMap[project.icon] || FaCode
          return (
            <div key={project.id} className="group relative">
              {/* Professional projects için daha sade renkler */}
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-gray-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  {/* Icon background'ını güncelle */}
                  <div className="p-4 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl text-white shadow-lg">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-2xl lg:text-3xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {project.title}
                  </h4>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {project.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-slate-600 to-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-gray-800">{feature.title}:</span>
                        <span className="text-gray-600 ml-2">{feature.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {project.categories && project.categories.length > 0 && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Categories:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.categories.map((category, catIndex) => (
                        <span
                          key={catIndex}
                          className="px-3 py-1 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 rounded-lg text-sm font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}

        {/* E-Learning Platforms */}
        {keyProjectsCours.map((course) => {
          const IconComponent = iconMap[course.icon] || FaBookOpen
          return (
            <div key={course.id} className="group relative">
              {/* E-Learning projects için */}
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-gray-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  {/* E-Learning projects için */}
                  <div className="p-4 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl text-white shadow-lg">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-2xl lg:text-3xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {course.title}
                  </h4>
                </div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{course.description}</p>

                <div className="space-y-6">
                  {course.versions.map((version, versionIndex) => (
                    <div key={versionIndex} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                      <h5 className="font-bold text-xl text-gray-800 mb-4">{version.name}</h5>

                      <div className="flex flex-wrap gap-3 mb-4">
                        {version.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-2 bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-lg text-sm font-medium shadow-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-3">
                        {version.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-slate-600 to-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}

        {/* Other Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {keyProjects.map((project, index) => {
            const IconComponent = iconMap[project.icon] || FaCode
            const gradients = ["from-slate-600 to-gray-600", "from-gray-600 to-slate-700"]
            const gradient = gradients[index % gradients.length]

            return (
              <div key={project.id} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300`}
                ></div>

                <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${gradient} rounded-xl text-white shadow-lg`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-xl text-gray-800">{project.title}</h4>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${gradient} text-white rounded-lg text-xs font-medium shadow-md`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${gradient} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Projects Section */}
        <div className="group relative">
          {/* Additional projects için */}
          <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>

          <div className="relative bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 border border-indigo-100 shadow-lg">
            {/* Additional projects için */}
            <h4 className="font-bold text-xl mb-4 bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
              {additional.title}
            </h4>
            <p className="text-gray-700 mb-3 text-base">{additional.description}</p>
            <p className="text-gray-600 italic text-sm">{additional.contents}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
