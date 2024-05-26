import Link from "next/link";

export default function ConsultDay() {
    return(
        <div className="w-full h-[800px] max-sm:h-[500px] bg-[#212722] flex flex-col justify-center items-center text-center max-sm:px-5 gap-12 max-sm:gap-8">
            <h1 className="font-serif font-bold text-8xl max-sm:text-4xl text-white">Get started with a <br /> consultation today.</h1>
            <span className="text-3xl mb-4 max-sm:text-xl text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis rem, esse <br />
                doloribus sint eaque at debitis enim vitae minus expedita ratione dignissimos <br />
                sit nostrum optio sequi. Ipsa at beatae q
             </span>
            <Link href={"/contact"} className="h-[100px] max-sm:h-[60px] w-[400px] max-sm:w-full bg-[#ea8f10] hover:bg-[#b49263] hover:duration-300 rounded-lg flex justify-center items-center text-[#181818] text-3xl max-sm:text-xl">Lets Work Together</Link>
        </div>
    )
}