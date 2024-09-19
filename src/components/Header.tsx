import { Search, SeparatorVertical } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {
    return (
            <div className="flex max-lg:justify-between sticky top-0 items-center w-full h-[50px] py-[15px] lg:px-[100px] max-sm:px-10 bg-white z-40 ">
                <div className="lg:mx-[20px] start">
                    <a href="/" className="flex">
                        <Image
                            src="/Atom2.jpg"
                            alt="logo"
                            width={100}
                            height={100}
                        />
                    </a>
                </div>
                <div className="flex w-full max-lg:hidden justify-between">
                    <ul className="flex gap-5 text-[12px] items-center">
                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                            <a href="/projects">PROJECTS</a>
                        </li>
                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                            <a href="/expertise">EXPERTISE</a>
                        </li>
                        {/* <li className="text-black hover:text-blue-400 active:text-blue-400">
                            <a href="/insights">INSIGHTS</a>
                        </li> */}
                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                            <a href="/about">ABOUT</a>
                        </li>
                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                            <a href="/blog">BLOG</a>
                        </li>
                    </ul>
                    <ul className="flex text-[12px] items-center">
                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                            <a href="/contactus">CONTACT US</a>
                        </li>
                    </ul>
                </div>

                <div className="lg:hidden flex w-10">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Image
                                src={"/hamburger.png"}
                                alt="menu"
                                width={20}
                                height={20}
                            />
                        </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuSeparator />
                                    <ul className="flex gap-5 text-[13.48px] items-center flex-col">
                                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                                            <a href="/projects">PROJECTS</a>
                                        </li>
                                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                                            <a href="/expertise">EXPERTISE</a>
                                        </li>
                                        {/* <li className="text-black hover:text-blue-400 active:text-blue-400">
                                            <a href="/insights">INSIGHTS</a>
                                        </li> */}
                                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                                            <a href="/about">ABOUT</a>
                                        </li>
                                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                                            <a href="/blog">BLOG</a>
                                        </li>
                                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                                            <a href="/contactus">CONTACT US</a>
                                        </li>
                                    </ul>
                            </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>
    );
};
export default Header;
