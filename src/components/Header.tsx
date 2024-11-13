
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";


const Header = () => {
    return (
            <div className="flex max-lg:justify-between sticky top-0 items-center w-full h-[50px] py-[15px] lg:px-[100px] max-sm:px-10 bg-white z-40">
                <div className="lg:mx-[20px] start">
                    <a href="/" className="flex">
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1zdS_pKYo6VjlgN53JF0j44vZTN687oox"
                            alt="logo"
                            width={100}
                            height={100}
                            quality={40}
                        />
                    </a>
                </div>

                <div className="flex w-full max-lg:hidden justify-between">
                    <ul className="flex gap-5 text-[12px] items-center">
                        <li className="text-black hover:text-orange-400 active:text-orange-400">
                            <a href="/projects">PROJECTS</a>
                        </li>
                        <li className="text-black hover:text-orange-400 active:text-orange-400">
                            <a href="/expertise">EXPERTISE</a>
                        </li>
                        {/* <li className="text-black hover:text-blue-400 active:text-blue-400">
                            <a href="/insights">INSIGHTS</a>
                        </li> */}
                        <li className="text-black hover:text-orange-400 active:text-orange-400">
                            <a href="/about">ABOUT</a>
                        </li>
                        <li className="text-black hover:text-orange-400 active:text-orange-400">
                            <a href="/blog">BLOG</a>
                        </li>
                    </ul>
                    <ul className="flex text-[7px] items-center">
                        <li className="text-black hover:text-blue-400 active:text-blue-400">
                            <Button className="bg-orange-500"><a href="https://forms.gle/YDVrxun83nFkhJst6">CONTACT US</a></Button>
                        </li>
                    </ul>
                </div>

                <div className="lg:hidden flex w-full justify-end h-full">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Image
                                src={"/hamburger.png"}
                                alt="menu"
                                width={20}
                                height={20}
                                quality={40}
                            />
                        </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-screen backdrop-blur-md bg-white/30">
                                    <ul className="flex gap-5 text-lg items-end flex-col m-10">
                                        <li className="text-black hover:text-orange-400 active:text-orange-400">
                                            <a href="/projects">PROJECTS</a>
                                        </li>
                                        <li className="text-black hover:text-orange-400 active:text-orange-400">
                                            <a href="/expertise">EXPERTISE</a>
                                        </li>
                                        {/* <li className="text-black hover:text-blue-400 active:text-blue-400">
                                            <a href="/insights">INSIGHTS</a>
                                        </li> */}
                                        <li className="text-black hover:text-orange-400 active:text-orange-400">
                                            <a href="/about">ABOUT</a>
                                        </li>
                                        <li className="text-black hover:text-orange-400 active:text-orange-400">
                                            <a href="/blog">BLOG</a>
                                        </li>
                                        <li className="text-black hover:text-orange-400 active:text-orange-400">
                                            <a href="https://forms.gle/YDVrxun83nFkhJst6">CONTACT US</a>
                                        </li>
                                    </ul>
                            </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>
    );
};
export default Header;
