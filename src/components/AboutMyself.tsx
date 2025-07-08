import { FaUser } from "react-icons/fa";

interface AboutMyself{
    text:string;
}

interface AboutMyselfProps{
    abutMySelf:AboutMyself;
}
{/* About Me Section */}
export default function AboutMySelf({abutMySelf}:AboutMyselfProps) {
 return(
    <div className="bg-white shadow-xl border-0 -mt-2 md:-mt-4 relative z-10 rounded-lg overflow-hidden">
    <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-4 sm:px-6 lg:px-8 py-4 md-py-6">
        <h3 className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-semibold">
            <FaUser className="w-5 h-5 md:w-6 md:w-6"/>
           ABOUT MYSELF
        </h3>
    </div>
    <div className="p-4 sm:p-6 lg:p-8">
    <p className="text-gray-700 leading-relaxed text-lg sm:text-base lg:text-lg font-light ">
    {abutMySelf.text}
    </p>
    </div>
</div>
 )
}