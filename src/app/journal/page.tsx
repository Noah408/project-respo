import NoticeVert from "@/components/noticevert";

export default function Journal() {
    return(
        <div className="w-full h-fit flex flex-col items-center mt-20">
            <div className="w-[90%] h-[600px] max-sm:h-[300px] flex flex-col text-center justify-center items-center">
                <span className="text-[#ea8f10] text-4xl mb-4 max-sm:text-2xl">My Blog</span>
                <h1 className="font-serif font-bold text-9xl max-sm:text-5xl text-white">Recent Writings</h1>
            </div>
            <div className="bg-white w-full h-fit flex flex-col items-center gap-10 py-44 max-sm:gap-6 max-sm:py-24">
                <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-12 w-full h-fit px-[5%]">
                    <NoticeVert categoria="Sponsored" notices="Need Web Hosting for Your Websites?"/>
                    <NoticeVert categoria="Productivity" notices="5 Marketing Productivity Apps for Your Team"/>
                    <NoticeVert categoria="SEO" notices="7 SEO Factors to Consider for Better Website Ranking"/>
                    <NoticeVert categoria="Productivity" notices="5 Effective Web Design Principles"/>
                    <NoticeVert categoria="Sponsored" notices="Need Web Hosting for Your Websites?"/>
                    <NoticeVert categoria="Productivity" notices="5 Marketing Productivity Apps for Your Team"/>
                    <NoticeVert categoria="SEO" notices="7 SEO Factors to Consider for Better Website Ranking"/>
                    <NoticeVert categoria="Productivity" notices="5 Effective Web Design Principles"/>
                    <NoticeVert categoria="Sponsored" notices="Need Web Hosting for Your Websites?"/>
                    <NoticeVert categoria="Productivity" notices="5 Marketing Productivity Apps for Your Team"/>
                    <NoticeVert categoria="SEO" notices="7 SEO Factors to Consider for Better Website Ranking"/>
                    <NoticeVert categoria="Productivity" notices="5 Effective Web Design Principles"/>
                </div>
            </div>
        </div>
    )
}