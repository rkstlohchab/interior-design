import { Search, SeparatorVertical } from "lucide-react";
import Image from "next/image";

const Header = () => {
    return (
        <header className="w-[calc(100vw-252px)] h-[70px] pb-[15px] pt-[22px] mx-[126px] flex justify-between bg-white">
            <div className="left-nav flex items-center">
                <div className="Nikken-logo mr-[50px]">
                    <a href="/" className="items-center">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/2/27/Nikken_Sekkei_company_logo.svg"
                            alt="logo"
                            width={100}
                            height={100}
                        />
                    </a>
                </div>
                <nav className="flex">
                    <ul className="flex gap-5 text-[13.48px] font-semibold items-center">
                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                            <a href="/projects">PROJECTS</a>
                        </li>
                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                            <a href="/expertise">EXPERTISE</a>
                        </li>
                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                            <a href="/insights">INSIGHTS</a>
                        </li>
                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                            <a href="/about">ABOUT</a>
                        </li>
                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                            <a href="/news">NEWS</a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* <div className="right-nav flex items-center">
                <button className="h-10 w-10 bg-gray-200 items-center justify-center rounded-full flex">
                    <Search className="h-4 w-4" color="#808080" />
                </button>
                <nav className="flex">
                    <ul className="flex gap-5 text-[13.48px] font-normal items-center ml-[15px]">
                        <li className="hover:text-blue-400 active:text-blue-400">
                            <a href="/projects">CAREER</a>
                        </li>
                        <li className="hover:text-blue-400 active:text-blue-400">
                            <a href="/expertise">NIKEEN BRAND</a>
                        </li>
                        <li className="hover:text-blue-400 active:text-blue-400">
                            <a href="/insights">日本語</a>
                        </li>
                        
                        <li className="hover:text-blue-400 active:text-blue-400">
                            <a href="/about">中文</a>
                        </li>
                        <li className="hover:text-blue-400 active:text-blue-400 items-center">
                            <a href="/" className="items-center">
                                <Image
                                    src="https://www.nikken.co.jp/en/p4iusj000000006s-img/site_logo.svg"
                                    alt="logo"
                                    width={140}
                                    height={100}
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div> */}
        </header>
    );
};
export default Header;
