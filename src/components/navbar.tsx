'use client'
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from 'react';
import { useRef } from 'react';

export default function NavBar() {
    const menubtn = document.querySelector('#menubtn')
    const [state, setState] = useState(true)
    const menu = useRef<HTMLUListElement>(null)
    function OpenMenu(){ 
        if(state){
            setState(false)
            console.log(state);
            setTimeout( ()=> {if(menu.current) menu.current.style.display='flex' }, 10 )
            if(menu.current) menu.current.className+='animationintro'
        }else{
            setState(true)
            console.log(state);
            setTimeout( ()=> {if(menu.current) menu.current.style.display='none' }, 20 )
        }
    }

    return(
        <header className="flex bg-[#212722] w-full h-[150px] max-sm:h-[100px] items-end justify-center max-sm:border-b max-sm:border-[#515151] max-sm:relative" id="cima">
            <div className="w-[90%] h-[80%] max-sm:w-[90%] flex justify-between items-center">
                <Link href={"/"} className="h-full w-[10%] max-sm:w-[20%] flex items-center">
                    <span className="text-white font-semibold text-5xl max-sm:mb-3 mb-5 max-sm:text-xl font-serif">Monica.</span>
                </Link>
                <button className="flex-none hidden max-sm:flex w-10 h-10 pb-3 justify-center items-center" onClick={OpenMenu}>
                    <Menu size={36} color="#ffffff" />
                </button>
                <ul ref={menu} className="h-full w-[100%] max-sm:h-[350px] z-50 max-sm:m-0 animationintro ml-16 flex items-center relative max-sm:items-start max-sm:py-10 max-sm:gap-4 max-sm:absolute max-sm:top-[100px] max-sm:left-0 gap-6 max-sm:flex-col max-sm:flex-none max-sm:hidden max-sm:overflow-hidden max-sm:px-[20px] bg-[#212722] max-sm:border-b max-sm:border-[#515151]">
                    <li><Link href={"/about"} className="text-2xl max-sm:text-xl text-[#868686] hover:text-white hover:duration-400">About</Link></li>
                    <li><Link href={"/services"} className="text-2xl max-sm:text-xl text-[#868686] hover:text-white hover:duration-400">Services</Link></li>
                    <li><Link href={"/journal"} className="text-2xl max-sm:text-xl text-[#868686] hover:text-white hover:duration-400">Journal</Link></li>
                    <li><Link href={"/contact"} className="text-2xl max-sm:text-xl text-[#868686] hover:text-white hover:duration-400">Contact</Link></li>
                    <Link href={"/contact"} className="absolute right-0 h-[100px] max-sm:static max-sm:h-[60px] w-[400px] max-sm:w-full max-sm:mt-10 bg-[#ea8f10] hover:bg-[#b49263] hover:duration-300 rounded-lg flex justify-center items-center text-[#181818] text-3xl max-sm:text-xl">Lets Work Together</Link>
                </ul>
            </div>
        </header>
    )
}