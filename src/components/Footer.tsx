import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { LocateIcon, PhoneCallIcon } from 'lucide-react';

const Header = () => {
    return (
            <div className="fixed bottom-0 max-lg:text-[10px] lg:text-[13px] flex flex-row justify-between items-center w-full h-[35px] lg:py-[15px] lg:px-[70px] max-sm:px-10 bg-white border-gray-300 border-t-2">
                
                <div className="w-1/2 flex justify-start flex-wrap flex-row lg:gap-4 max-lg:gap-0 items-center">
                    <div className="flex items-center">
                        <PhoneCallIcon className='w-4 max-lg:w-3 max-lg:h-2'/>
                        <p>Phone :- 8950520252</p>
                    </div>
                    <div className="flex items-center">
                        <LocateIcon className='w-4 max-lg:w-3 max-lg:h-2'/>
                        <p>Address:- Sec 67</p>
                    </div>
                </div>
                <div className="flex w-1/2 justify-end gap-2 align-center items-baseline">
                    <p>
                        <a href="https://www.linkedin.com/in/gourav-g-b9949b135/">
                            <LinkedInIcon />
                        </a>
                    </p>
                    <p>Atom Designs</p>
                </div>

            </div>
    );
};
export default Header;
