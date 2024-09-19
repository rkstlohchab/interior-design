import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {
    return (
            <div className="flex flex-row justify-between items-center w-full h-[80px] py-[15px] lg:px-[70px] max-sm:px-10 bg-white z-40 border-t-[1.5px] border-black">
                <div className="w-1/2 flex justify-start">
                    <h1>Atom Designs</h1>
                </div>
                <div className="flex w-1/2 justify-end">
                    <p>Copyright Atom Designs LTD.</p>
                </div>


            </div>
    );
};
export default Header;
