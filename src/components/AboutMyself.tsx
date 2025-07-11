import { FaUser } from "react-icons/fa"

interface AboutMyself {
  text: string
}

interface AboutMyselfProps {
  abutMySelf: AboutMyself
}

export default function AboutMySelf({ abutMySelf }: AboutMyselfProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-2xl border border-gray-100">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-600 to-gray-600"></div>

      <div className="bg-gradient-to-r from-slate-800 to-gray-800 text-white px-6 sm:px-8 lg:px-10 py-6 md:py-8">
        <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold">
          <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
            <FaUser className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          ABOUT MYSELF
        </h3>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-slate-600 to-gray-600 rounded-full"></div>
          <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-gray-700 pl-8">
            {abutMySelf.text}
          </p>
        </div>
      </div>
    </div>
  )
}
