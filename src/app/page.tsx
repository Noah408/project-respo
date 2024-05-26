import ConsultDay from "@/components/consultday";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full h-fit flex flex-col items-center mt-20">
      <div className="w-[100%] h-[700px] max-sm:h-fit flex justify-between max-sm:items-end relative max-sm:flex-col px-[5%] max-sm:gap-3">
        <div className="h-full w-[63%] max-sm:w-[100%] flex-col relative">
          <div className="w-52 h-fit gap-6 flex flex-col absolute right-full top-5 max-sm:top-3 mr-2">
            <hr className="h-[1px] w-full border-[#ea8f10]"/>
          </div>
          <span className="text-white text-4xl max-sm:text-xl">Hello, I am Monica</span>
          <h1 className="text-white text-9xl max-sm:text-[45px] font-serif max-sm:mt-2 mt-4">I create marketing strategies for your business that get results.</h1>
        </div>
        <div className="h-full w-[27%] max-sm:w-[50%] max-sm:h-[32%] bg-white relative">
          <Image className=" w-full h-full object-cover" width={1250} height={1000} src="/assets/intro-bg@2x.jpg" alt="" />
          <div className="w-52 max-sm:w-60 h-fit gap-6 max-sm:gap-3 flex flex-col absolute right-full bottom-10 max-sm:bottom-5">
            <hr className="h-[1px] w-full border-[#ea8f10]"/>
            <hr className="h-[1px] w-full border-[#ea8f10]"/>
            <hr className="h-[1px] w-full border-[#ea8f10]"/>
            <hr className="h-[1px] w-full border-[#ea8f10]"/>
            <hr className="h-[1px] w-full border-[#ea8f10]"/>
          </div>
        </div>
        <Link href={""} className="flex items-center absolute bottom-0 max-sm:bottom-44 max-sm:left-7 gap-3">
          <div className="h-16 w-16 max-sm:h-12 max-sm:w-12 rounded-full border hover:duration-300 hover:border-[#ea8f10] flex justify-center items-center hover:text-[#ea8f10]"><ArrowDown color="#ffffff" size={32} /></div>
          <span className="text-white text-3xl max-sm:text-xl max-sm:hidden max-sm:flex-none">Scroll for more</span>
        </Link>
      </div>
      <div className="px-[5%] w-full h-[700px]">

      </div>
      <ConsultDay/>
    </div>
  )
}
