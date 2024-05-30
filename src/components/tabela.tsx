export default function Tabela(){
    return(
        <div className="w-full h-fit flex flex-col gap-2">
         <div className="flex items-end gap-2">
              <span className="text-[#ea8f10] max-sm:text-xl text-3xl font-bold">01.</span>
              <h1 className="max-sm:text-2xl text-4xl font-serif text-[#181818] font-bold">Digital Marketing</h1>
        </div>
        <span className="text-2xl my-4 max-sm:mt-2 max-sm:text-xl text-[#181818]">Need hosting for your website? We would highly recommend DreamHost. Enjoy 100% in-house support, guaranteed performance and uptime, 1-click installs, and a super-intuitive control panel to make managing your websites and projects easy. Sign up now to get started.</span>
        <ul className="list-disc h-fit w-full">
            <li className="border-y border-gray-500 text-2xl py-4  max-sm:text-xl ml-[6%]">voluptatibus Earum</li>
            <li className="text-2xl py-4  max-sm:text-xl ml-[6%]">voluptatibus Earum</li>
            <li className="border-y border-gray-500 text-2xl py-4  max-sm:text-xl ml-[6%]">voluptatibus Earum</li>
        </ul>
    </div>
    );
}