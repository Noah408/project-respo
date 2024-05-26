import ConsultDay from "@/components/consultday";
import Image from "next/image";

export default function About(){
    return(
        <div className="w-full h-fit flex flex-col items-center mt-20">
            <div className="w-[90%] h-[600px] max-sm:h-[300px] flex flex-col text-center justify-center items-center">
                <span className="text-[#ea8f10] text-4xl mb-4 max-sm:text-2xl">About</span>
                <h1 className="font-serif font-bold text-9xl max-sm:text-5xl text-white">Hi, I am Monica</h1>
            </div>
            <div className="bg-white w-full h-fit flex flex-col items-center max-sm:py-12 py-24 gap-20 max-sm:gap-10">
                <div className="w-[90%] max-sm:w-[85%] h-fit flex max-sm:flex-col justify-between max-sm:gap-10">
                    <div className="w-[50%] max-sm:w-full max-sm:text-center">
                        <h1 className="font-serif font-bold text-8xl max-sm:text-4xl text-[#181818]">Some inspiring words to describe yourself</h1>
                    </div>
                    <div className="w-[50%] max-sm:w-full">
                        <span className="text-5xl mb-4 max-sm:text-2xl text-[#181818]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eos quas blanditiis, quos sint nostrum fugit aperiam inventore optio itaque molestias corporis, ipsa tenetur eligendi nihil iste porro, natus culpa consequuntur? Maxime, corporis tempore. Sed tenetur veritatis velit recusandae eum, molestiae voluptate ducimus laudantium esse illo doloribus atque eligendi deleniti iusto.</span>
                    </div>
                </div>
                <div className="w-[90%] max-sm:w-[85%] h-[1200px] max-sm:h-[400px] flex justify-center items-center">
                    <Image height={14000} width={2400} className="h-full object-cover" src="/assets/about-2400.jpg" alt="" />
                </div>
                <div className="w-[70%] max-sm:w-[85%] h-fit flex flex-col gap-8 max-sm:gap-4">
                    <h1 className="font-serif font-bold text-6xl max-sm:text-3xl text-[#181818]">How I Got Here</h1>
                    <span className="text-3xl mb-4 max-sm:text-xl text-[#181818]">Eaque temporibus culpa perferendis expedita assumenda mollitia magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit facilis voluptates voluptatum animi numquam quas ea praesentium quaerat maxime sunt odit inventore itaque est et autem sequi nulla. Distinctio obcaecati nesciunt asperiores dolorum tenetur voluptates, nemo alias doloremque. Quos cumque ipsum laudantium odio vero aut odit nostrum aliquam? Nostrum in facilis, minus fuga quasi voluptas explicabo possimus incidunt, expedita tempora eius rem nobis sequi. Doloribus esse sint suscipit quam nisi blanditiis voluptate explicabo.</span>
                </div>
                <div className="w-[70%] max-sm:w-[85%] h-fit">
                    <h1 className="font-serif font-bold text-6xl max-sm:text-3xl text-[#181818]">My Values & Beliefs</h1>
                </div>
                <div className="w-[70%] max-sm:w-[85%] gap-8 h-fit max-sm:flex max-sm:flex-col grid grid-cols-2">
                    <div className="w-full h-fit gap-5">
                        <h1 className="text-3xl mb-4 max-sm:text-xl font-bold text-[#181818]">ADIPISICING</h1>
                        <span className="text-3xl mb-4 max-sm:text-xl text-[#181818]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus consectetur adipisicing elit excepturi corrupti nam quae exercitationem cupiditate, provident ipsa delectus vero possimus reprehenderit quas ut officiis tempora voluptatum quibusdam consectetur commodi.</span>
                    </div>
                    <div className="w-full h-fit gap-5">
                        <h1 className="text-3xl mb-4 max-sm:text-xl font-bold text-[#181818]">DOLOREMQUE</h1>
                        <span className="text-3xl mb-4 max-sm:text-xl text-[#181818]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus consectetur adipisicing elit excepturi corrupti nam quae exercitationem cupiditate, provident ipsa delectus vero possimus reprehenderit quas ut officiis tempora voluptatum quibusdam consectetur commodi.</span>
                    </div>
                    <div className="w-full h-fit gap-5">
                        <h1 className="text-3xl mb-4 max-sm:text-xl font-bold text-[#181818]">ASSUMENDA</h1>
                        <span className="text-3xl mb-4 max-sm:text-xl text-[#181818]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus consectetur adipisicing elit excepturi corrupti nam quae exercitationem cupiditate, provident ipsa delectus vero possimus reprehenderit quas ut officiis tempora voluptatum quibusdam consectetur commodi.</span>
                    </div>
                    <div className="w-full h-fit gap-5">
                        <h1 className="text-3xl mb-4 max-sm:text-xl font-bold text-[#181818]">CONSECTETUR</h1>
                        <span className="text-3xl mb-4 max-sm:text-xl text-[#181818]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus consectetur adipisicing elit excepturi corrupti nam quae exercitationem cupiditate, provident ipsa delectus vero possimus reprehenderit quas ut officiis tempora voluptatum quibusdam consectetur commodi.</span>
                    </div>
                </div>
                <div className="w-[70%] max-sm:w-[85%] h-fit flex flex-col gap-8 max-sm:gap-4">
                    <h1 className="font-serif font-bold text-6xl max-sm:text-3xl text-[#181818]">Why Work With Me</h1>
                    <span className="text-3xl mb-4 max-sm:text-xl text-[#181818]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus culpa perferendis expedita assumenda mollitia magnam, facilis voluptates voluptatum animi numquam quas ea praesentium quaerat maxime sunt odit inventore itaque est et autem sequi nulla. Distinctio obcaecati nesciunt asperiores dolorum tenetur voluptates, nemo alias doloremque. Quos cumque ipsum laudantium odio vero aut odit nostrum aliquam? Nostrum in facilis, minus fuga quasi voluptas explicabo possimus incidunt, expedita tempora eius rem nobis sequi. Doloribus esse sint suscipit quam nisi blanditiis voluptate explicabo.</span>
                    <span className="text-3xl mb-4 max-sm:text-xl text-[#181818]">Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit. Numquam, corporis accusamus commodi saepe nostrum nesciunt nisi rem necessitatibus unde laboriosam molestias, quam ipsa voluptatum sed ex cumque facilis assumenda maiores tempore reiciendis enim accusantium?</span>
                    <h1 className="font-serif font-bold text-6xl max-sm:text-3xl text-[#181818]">A Few More Words About Myself</h1>
                    <span className="text-3xl mb-4 max-sm:text-xl text-[#181818]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda debitis aut quidem ad voluptates quibusdam soluta temporibus, eveniet nobis tempore sunt, provident sapiente accusamus dignissimos voluptatum fugiat nulla dicta nihil molestiae aspernatur error in. Ut quo porro voluptatum delectus asperiores culpa non cum facere minima nesciunt assumenda, praesentium reprehenderit accusamus, quam repellat nobis nemo? Ut magnam unde culpa pariatur possimus sunt fugiat ea maxime praesentium eaque quo odio sed eligendi harum dolor, repellendus reprehenderit facere nihil quam. Saepe, magni.</span>
                </div>
            </div>
            <ConsultDay/>
        </div>
    )
}