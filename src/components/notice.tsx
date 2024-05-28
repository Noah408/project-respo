import Link from "next/link";

interface propsNotice{
    categoria:string;
    notices:string;
}

export default function Notice({categoria, notices}:propsNotice){
    return(
        <div className="w-full h-fit flex flex-col gap-2">
            <Link href={""} className="text-[#ea8f10] hover:text-[#b49263] hover:duration-300 font-semibold max-sm:text-xl text-2xl">{categoria}</Link>
            <Link href={""} className="max-sm:text-2xl text-4xl font-bold font-serif text-white">{notices}</Link>
            <span className="text-2xl mt-4 max-sm:mt-2 max-sm:text-xl text-[#848484]">Need hosting for your website? We would highly recommend DreamHost. Enjoy 100% in-house support, guaranteed performance and uptime, 1-click installs, and a super-intuitive control panel to make managing your websites and projects easy. Sign up now to get started.</span>
        </div>
    );
}