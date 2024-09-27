import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
    return (
            <div className="max-lg:text-[10px] lg:text-[13px] flex flex-row justify-between items-center w-full h-[65px] lg:py-[15px] lg:px-[70px] max-sm:px-10 bg-white z-40 border-gray-300 border-t-2 ">
                <div className="w-1/2 flex justify-start flex-wrap flex-col">
                    <p>Pno:- 8950520252</p>
                    <p>Address:- Sec 67</p>
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
