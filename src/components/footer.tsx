import { ArrowUp, Dribbble, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className="w-full h-[1000px] max-sm:h-fit bg-[#181818] flex flex-col items-center justify-center gap-2 border-t border-[#515151]">
           <div className="w-[90%] h-[520px] max-sm:h-fit flex max-sm:flex-col items-center justify-between max-sm:gap-10 max-sm:mt-10">
                <div className="max-sm:w-full h-fit w-[720px]">
                    <h1 className="text-white font-semibold text-5xl max-sm:mb-3 mb-5 max-sm:text-3xl font-serif">About Monica</h1>
                    <p className="text-[#929292] text-3xl max-sm:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum quasi facere libero, fugiat laboriosam possimus reprehenderit eveniet vero voluptatum fugit ad quis veritatis suscipit beatae incidunt perferendis tempore earum hic repellendus quisquam recusandae ipsa id esse. Nobis, aut deleniti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ratione dignissimos.</p>
                </div>
                <div className="max-sm:w-full h-fit w-[400px]">
                    <h1 className="text-white font-semibold text-5xl max-sm:mb-3 mb-5 max-sm:text-3xl font-serif">Site Links</h1>
                    <ul className="flex flex-col max-sm:gap-1 gap-3">
                        <li><Link href={""} className="text-[#929292] text-3xl max-sm:text-xl hover:text-white hover:duration-300">Home</Link></li>
                        <li><Link href={""} className="text-[#929292] text-3xl max-sm:text-xl hover:text-white hover:duration-300">Services</Link></li>
                        <li><Link href={""} className="text-[#929292] text-3xl max-sm:text-xl hover:text-white hover:duration-300">Journal</Link></li>
                        <li><Link href={""} className="text-[#929292] text-3xl max-sm:text-xl hover:text-white hover:duration-300">About</Link></li>
                        <li><Link href={""} className="text-[#929292] text-3xl max-sm:text-xl hover:text-white hover:duration-300">Contact</Link></li>
                        <li><Link href={""} className="text-[#929292] text-3xl max-sm:text-xl hover:text-white hover:duration-300">DreamHost</Link></li>
                    </ul>
                </div>
                <div className="max-sm:w-full h-fit w-[400px] flex flex-col">
                    <h1 className="text-white font-semibold text-5xl max-sm:mb-3 mb-5 max-sm:text-3xl font-serif">Newsletter</h1>
                    <p className="text-[#929292] text-3xl max-sm:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ratione dignissimos.</p>
                    <input className="w-full h-[90px] bg-[#333434] mt-5 text-white rounded-lg max-sm:h-[60px] text-center outline-none text-3xl max-sm:text-xl" type="text" name="" id="" placeholder="Your Email Adress" />
                    <button className="w-full h-[90px] bg-[#ea8f10] hover:bg-[#b49263] hover:duration-300 mt-5 rounded-lg max-sm:h-[60px] text-3xl max-sm:text-xl">Subscribe</button>
                </div>
           </div>
           <div className="w-full h-[150px] max-sm:h-fit flex max-sm:flex-col px-20 max-sm:px-8 justify-between max-sm:gap-5 max-sm:mt-10">
                <ul className="max-sm:w-full w-fit h-fit gap-5 flex">
                    <li><Link href={""} className="hover:text-white hover:duration-300"><Facebook  size={40} color="#868686" /></Link></li>
                    <li><Link href={""} className="hover:text-white hover:duration-300"><Twitter  size={40} color="#868686" /></Link></li>
                    <li><Link href={""} className="hover:text-white hover:duration-300"><Instagram  size={40} color="#868686" /></Link></li>
                    <li><Link href={""} className="hover:text-white hover:duration-300"><Dribbble  size={40} color="#868686" /></Link></li>
                </ul>
                <div className="max-sm:w-full h-81 w-[1000px] gap-5 flex justify-between max-sm:mb-12">
                    <div className="w-fit h-fit flex flex-col">
                        <span className="text-[#7a7a7a] text-2xl max-sm:text-xl">© Copyright Monica 2022</span>
                        <span className="text-[#7a7a7a] text-2xl max-sm:text-xl">
                            Design by <Link href={""} className="text-white hover:duration-300 hover:text-[#ea8f10]">StyleShout</Link> Distribution By <Link href={""} className="text-white hover:duration-300 hover:text-[#ea8f10]">ThemeWagon</Link>
                        </span>
                    </div>
                    <Link href={"#cima"} className="h-20 w-20 max-sm:h-14 max-sm:w-16 rounded-full border hover:duration-300 hover:border-[#ea8f10] flex justify-center items-center hover:text-[#ea8f10]"><ArrowUp size={32} color="#ffffff" strokeWidth={1.5} /></Link>
                </div>
           </div>
        </footer>
    )
}