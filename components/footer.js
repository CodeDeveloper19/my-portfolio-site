import { Link } from "react-scroll";
import StarsBackground from "./starrybackground";

const Footer = () => {
    return ( 
        <footer className="w-full h-fit min-h-[100px] py-[50px] flex flex-col items-center font-[500] text-[13px] font-robotoMono relative">
            <StarsBackground/>
            <nav className="z-10 flex flex-col items-center w-full text-white smartPhone:w-fit h-fit smartPhone:flex-row">
                <Link to='projects' smooth={true} duration={500} className='flex flex-col group hover:cursor-pointer'>
                    <p>Projects</p>
                    <div className='mt-[5px] transition-[width] duration-[400ms] h-[1px] w-0 group-hover:w-full bg-[#64ffd9]'></div>
                </Link>
                <Link to='workexperience' smooth={true} duration={500} className='ml-0 mt-[5px] smartPhone:mt-0 smartPhone:ml-[30px] flex flex-col group hover:cursor-pointer'>
                    <p>Work Experience</p>
                    <div className='mt-[5px] transition-[width] duration-[400ms] h-[1px] w-0 group-hover:w-full bg-[#64ffd9]'></div>
                </Link>
                <Link to='skills' smooth={true} duration={500} className='ml-0 mt-[5px] smartPhone:mt-0 smartPhone:ml-[30px] flex flex-col group hover:cursor-pointer'>
                    <p>Skills</p>
                    <div className='mt-[5px] transition-[width] duration-[400ms] h-[1px] w-0 group-hover:w-full bg-[#64ffd9]'></div>
                </Link>
                <Link to='contact' smooth={true} duration={500} className='ml-0 mt-[5px] smartPhone:mt-0 smartPhone:ml-[30px] flex flex-col group hover:cursor-pointer'>
                    <p>Contact</p>
                    <div className='mt-[5px] transition-[width] duration-[400ms] h-[1px] w-0 group-hover:w-full bg-[#64ffd9]'></div>
                </Link>
            </nav>
            <span className="mt-[20px] flex flex-row items-center text-white z-10">
                <p className="mr-[10px]">Developed with</p>
                <i className="fa fa-heart-o mr-[10px]" aria-hidden="true"></i>
                <p>by me</p>
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-[#131862] opacity-[0.2] z-[5]"></div>
        </footer>
    );
}
 
export default Footer;