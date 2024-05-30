import ConsultDay from "@/components/consultday";
import Tabela from "@/components/tabela";

export default function Services(){
    return(
        <div className="w-full h-fit flex flex-col items-center mt-20">
            <div className="w-[90%] h-[600px] max-sm:h-[300px] flex flex-col bg-[#212722] text-center justify-center items-center">
                <span className="text-[#ea8f10] text-4xl mb-4 max-sm:text-2xl">Services</span>
                <h1 className="font-serif font-bold text-9xl max-sm:text-5xl text-white">High-Impact Services</h1>
            </div>
            <div className="bg-white w-full h-fit flex flex-col items-center gap-32 py-44 max-sm:gap-16 max-sm:py-24">
                <div className="w-full h-fit flex max-sm:flex-col max-sm:gap-10 px-[5%]">
                    <div className="w-[50%] max-sm:w-full h-fit max-sm:text-center">
                        <h1 className="max-sm:text-4xl text-8xl font-bold font-serif text-[#181818]">High-impact <br /> services to help <br /> your business</h1>
                    </div>
                    <div className="w-[50%] max-sm:w-full gap-4 h-fit flex flex-col">
                        <span className="text-4xl mb-4 max-sm:text-xl text-[#181818]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, quos! Quo vitae commodi suscipit corrupti tenetur ipsa libero voluptatibus architecto sapiente debitis! Nemo quisquam laboriosam libero maxime quis fugit repellat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum possimus debitis officiis quasi impedit veniam molestias odit consectetur. Impedit rerum, voluptates odio accusantium reprehenderit pariatur officia vel mollitia saepe totam?</span>
                    </div>
                </div>
                <div className="w-full h-fit px-[5%] grid grid-cols-3 max-sm:grid-cols-1 gap-12">
                    <Tabela/>
                    <Tabela/>
                    <Tabela/>
                    <Tabela/>
                    <Tabela/>
                    <Tabela/>
                    <Tabela/>
                    <Tabela/>
                    <Tabela/>
                </div>
            </div>
            <ConsultDay/>
        </div>
    )
}