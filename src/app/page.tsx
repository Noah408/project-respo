import ConsultDay from "@/components/consultday";
import Notice from "@/components/notice";
import { ArrowDown, Dribbble, Facebook, Instagram, Twitter } from "lucide-react";
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
        <Link href={"#xp"} className="flex items-center absolute bottom-0 max-sm:bottom-44 max-sm:left-7 gap-3">
          <div className="h-16 w-16 max-sm:h-12 max-sm:w-12 rounded-full border hover:duration-300 hover:border-[#ea8f10] flex justify-center items-center hover:text-[#ea8f10]"><ArrowDown color="#ffffff" size={32} /></div>
          <span className="text-white text-3xl max-sm:text-xl max-sm:hidden max-sm:flex-none">Scroll for more</span>
        </Link>
      </div>
      <div className="px-[5%] w-full h-fit grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10 max-sm:grid-row-3 grid-flow-row py-44 max-sm:py-24">
        <div className="h-fit row-span-1 max-sm:row-span-1 gap-4 max-sm:gap-2 flex flex-col">
          <span className="text-[#ea8f10] max-sm:text-xl text-3xl">About</span>
          <h1 className="max-sm:text-4xl text-8xl font-serif text-white">An inspiring <br /> headline about <br /> yourself.</h1>
        </div>
        <div className="h-fit gap-4 row-span-2 max-sm:row-span-1 flex flex-col">
          <span className="text-3xl mb-4 max-sm:text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque.</span>
          <span className="text-3xl mb-4 max-sm:text-xl text-white">Autem tenetur commodi maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eligendi fugit, facilis velit reiciendis iure laudantium. Praesentium repellat corrupti dolor sit sint obcaecati. Modi aut quo molestiae a explicabo maiores necessitatibus nemo repellendus architecto? Corrupti numquam ullam nostrum, eveniet at doloribus blanditiis aliquid a est porro aspernatur pariatur culpa soluta nesciunt odio quasi maxime debitis illum.</span>
          <span className="text-3xl mb-4 max-sm:text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque.</span>
        </div>
        <div className="h-fit row-span-1 max-sm:row-span-1 gap-4 mcol-span-2 col-start-1 col-end-2 flex flex-col">
          <Link href={"/about"} className="max-sm:w-full w-[350px] h-[100px] max-sm:h-[60px] border border-white bg-[#212722] hover:bg-white text-white hover:text-[#212722] hover:duration-300 rounded-lg flex justify-center items-center text-2xl max-sm:text-xl">More About Me</Link>
          <ul className="max-sm:w-full  w-[350px] h-fit gap-5 flex justify-center">
                    <li><Link href={""} className="hover:text-white hover:duration-300"><Facebook  size={40} color="#ffffff" /></Link></li>
                    <li><Link href={""} className="hover:text-white hover:duration-300"><Twitter size={40} color="#ffffff" /></Link></li>
                    <li><Link href={""} className="hover:text-white hover:duration-300"><Instagram  size={40} color="#ffffff" /></Link></li>
                    <li><Link href={""} className="hover:text-white hover:duration-300"><Dribbble  size={40} color="#ffffff" /></Link></li>
            </ul>
        </div>
      </div>
      <div id="xp" className="w-full h-fit bg-white py-44 max-sm:gap-6 max-sm:py-24 flex px-[5%] max-sm:flex-col">
        <div className="w-[50%] max-sm:w-full gap-4 h-fit flex flex-col">
          <span className="text-[#ea8f10] max-sm:text-xl text-3xl">Expertise</span>
          <h1 className="max-sm:text-4xl text-8xl font-serif text-[#181818]">My key areas of expertise.</h1>
          <span className="text-3xl mb-4 max-sm:text-xl w-[70%] max-sm:w-full text-[#181818] max-sm:py-5 py-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit debitis quam dignissimos veritatis atque pariatur magnam obcaecati fugit reprehenderit vel numquam facere esse est deserunt, perferendis commodi voluptatem similique.</span>
          <Link href={"/services"} className="max-sm:w-full w-[350px] h-[100px] max-sm:h-[60px] border border-[#181818] bg-white text-[#181818] hover:bg-[#181818] hover:text-white  hover:duration-300 rounded-lg flex justify-center items-center text-2xl max-sm:text-xl">View All Services</Link>
        </div>
        <div className="w-[50%] max-sm:w-full h-fit flex flex-col gap-14 max-sm:gap-7">
          <div className="flex flex-col gap-6 max-sm:gap-3 w-full h-fit">
            <div className="flex items-end gap-2">
              <span className="text-[#ea8f10] max-sm:text-xl text-3xl">01.</span>
              <h1 className="max-sm:text-2xl text-4xl font-serif text-[#181818]">Digital Marketing</h1>
            </div>
            <span className="text-2xl mb-4 max-sm:text-xl text-[#181818]">Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</span>
          </div>
          <div className="flex flex-col gap-6 max-sm:gap-3 w-full h-fit">
            <div className="flex items-end gap-2">
              <span className="text-[#ea8f10] max-sm:text-xl text-3xl">02.</span>
              <h1 className="max-sm:text-2xl text-4xl font-serif text-[#181818]">Project Management</h1>
            </div>
            <span className="text-2xl mb-4 max-sm:text-xl text-[#181818]">Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</span>
          </div>
          <div className="flex flex-col gap-6 max-sm:gap-3 w-full h-fit">
            <div className="flex items-end gap-2">
              <span className="text-[#ea8f10] max-sm:text-xl text-3xl">03.</span>
              <h1 className="max-sm:text-2xl text-4xl font-serif text-[#181818]">Content Marketing</h1>
            </div>
            <span className="text-2xl mb-4 max-sm:text-xl text-[#181818]">Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</span>
          </div>
          <div className="flex flex-col gap-6 max-sm:gap-3 w-full h-fit">
            <div className="flex items-end gap-2">
              <span className="text-[#ea8f10] max-sm:text-xl text-3xl">04.</span>
              <h1 className="max-sm:text-2xl text-4xl font-serif text-[#181818]">Research & Discovery</h1>
            </div>
            <span className="text-2xl mb-4 max-sm:text-xl text-[#181818]">Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</span>
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-[#fef6e6] gap-32 flex max-sm:flex-col py-44 max-sm:py-24 px-[5%]">
        <div className="w-[50%] max-sm:w-[100%] h-fit">
          <span className="text-[#ea8f10] max-sm:text-xl text-3xl">Clients</span>
          <h1 className="max-sm:text-4xl text-8xl font-serif text-[#181818]">I have had the privilege of working with these incredible brands.</h1>
        </div>
        <div className="w-[50%] max-sm:w-[100%] h-fit flex flex-col gap-10">
          <span className="text-3xl mb-4 max-sm:text-xl text-[#181818]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam molestiae vel quaerat quas facilis voluptates rerum aspernatur quam voluptatem ea, vitae illo, omnis minus vero minima maiores quia nihil incidunt provident debitis ab qui quasi. Iure unde numquam in nulla praesentium nesciunt dolore exercitationem, odit expedita minima quisquam ullam ex. Aut perferendis vel consectetur modi esse. Temporibus reprehenderit alias magni atque repellat aspernatur voluptates, accusantium pariatur libero ad nesciunt illum labore facere. Earum iure consequatur cumque omnis maiores optio.</span>
          <span className="text-3xl mb-4 max-sm:text-xl text-[#181818]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam molestiae vel quaerat quas facilis voluptates rerum aspernatur quam voluptatem ea, vitae illo, omnis minus vero minima maiores quia nihil incidunt provident debitis ab qui quasi. Iure unde numquam in nulla praesentium nesciunt dolore exercitationem, odit expedita minima quisquam ullam ex. Aut perferendis vel consectetur modi esse. Temporibus reprehenderit alias magni atque repellat aspernatur voluptates, accusantium pariatur libero ad nesciunt illum labore facere. Earum iure consequatur cumque omnis maiores optio.</span>
        </div>
      </div>
      <ConsultDay/>
      <div className="w-full h-fit bg-[#181818] gap-32 flex flex-col py-44 max-sm:py-24 px-[5%]">
        <div className="w-full h-fit gap-2 flex flex-col items-center text-center">
          <span className="text-[#ea8f10] max-sm:text-xl text-3xl">Recent Articles</span>
          <h1 className="font-serif font-bold text-7xl max-sm:text-4xl text-white">Latest articles from my blog.</h1>
        </div>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-12 w-full h-fit">
          <Notice categoria="Sponsored" notices="Need Web Hosting for Your Websites?"/>
          <Notice categoria="Productivity" notices="5 Marketing Productivity Apps for Your Team"/>
          <Notice categoria="SEO" notices="7 SEO Factors to Consider for Better Website Ranking"/>
          <Notice categoria="Productivity" notices="5 Effective Web Design Principles"/>
        </div>
      </div>
    </div>
  );
}
