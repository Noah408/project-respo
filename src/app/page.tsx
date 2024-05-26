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
      <div className="px-[5%] w-full h-fit grid grid-cols-2 max-sm:grid-cols-1 max-sm:grid-row-3 grid-flow-row">
        <div className="h-fit row-span-1 max-sm:row-span-1 bg-green-950">01</div>
        <div className="h-fit gap-4 row-span-2 max-sm:row-span-1 bg-red-700 flex flex-col">
          <span className="text-4xl mb-4 max-sm:text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque.</span>
          <span className="text-4xl mb-4 max-sm:text-xl text-white">Autem tenetur commodi maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eligendi fugit, facilis velit reiciendis iure laudantium. Praesentium repellat corrupti dolor sit sint obcaecati. Modi aut quo molestiae a explicabo maiores necessitatibus nemo repellendus architecto? Corrupti numquam ullam nostrum, eveniet at doloribus blanditiis aliquid a est porro aspernatur pariatur culpa soluta nesciunt odio quasi maxime debitis illum.</span>
          <span className="text-4xl mb-4 max-sm:text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque.</span>
        </div>
        <div className="h-fit row-span-1 max-sm:row-span-1 mcol-span-2 col-start-1 col-end-2 bg-amber-500">03</div>
      </div>
      <ConsultDay/>
    </div>
  )
}
