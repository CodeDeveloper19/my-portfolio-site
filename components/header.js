import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { dropDownMenuContext } from '@/pages';

const Header = () => {
    const [[isDropDownMenu, setIsDropDownMenu]] = useContext(dropDownMenuContext);

    const dropDownMenu = () => {
        setIsDropDownMenu(!isDropDownMenu);
    };

  return (
    <header className='absolute top-0 w-full h-fit flex flex-row justify-end pr-[50px] py-[40px] font-[500] text-[13px] font-robotoMono z-30'>
        <button className='phone:hidden flex' onClick={dropDownMenu}><Image src='/menu.png' width={30} height={30} alt="illustration of a hamburger menu"/></button>
        <nav className='phone:flex hidden phone:flex-row flex-col h-full w-fit'>
            <Link to='projects' smooth={true} duration={500} className='ml-[30px] flex flex-col group hover:cursor-pointer'>
                <div className='flex flex-row'>
                    <p className='text-[#64ffd9]'>&lt;</p>
                    <p className='ml-[5px] text-white'>Projects</p>
                    <p className='text-[#64ffd9]'>/&gt;</p>
                </div>
                <div className='mt-[5px] transition-[width] duration-[400ms] h-[1px] w-0 group-hover:w-full bg-[#64ffd9]'></div>
            </Link>
            <Link to='workexperience' smooth={true} duration={500} className='ml-[30px] flex flex-col group hover:cursor-pointer'>
                <div className='flex flex-row'>
                    <p className='text-[#64ffd9]'>&lt;</p>
                    <p className='ml-[5px] text-white'>Work Experience</p>                    
                    <p className='text-[#64ffd9]'>/&gt;</p>
                </div>
                <div className='mt-[5px] transition-[width] duration-[400ms] h-[1px] w-0 group-hover:w-full bg-[#64ffd9]'></div>
            </Link>
            <Link to='skills' smooth={true} duration={500} className='ml-[30px] flex flex-col group hover:cursor-pointer'>
                <div className='flex flex-row'>
                    <p className='text-[#64ffd9]'>&lt;</p>
                    <p className='ml-[5px] text-white'>Skills</p>                    
                    <p className='text-[#64ffd9]'>/&gt;</p>
                </div>
                <div className='mt-[5px] transition-[width] duration-[400ms] h-[1px] w-0 group-hover:w-full bg-[#64ffd9]'></div>
            </Link>
            <Link to='contact' smooth={true} duration={500} className='ml-[30px] flex flex-col group hover:cursor-pointer'>
                <div className='flex flex-row'>
                    <p className='text-[#64ffd9]'>&lt;</p>
                    <p className='ml-[5px] text-white'>Contact</p>                    
                    <p className='text-[#64ffd9]'>/&gt;</p>
                </div>
                <div className='mt-[5px] transition-[width] duration-[400ms] h-[1px] w-0 group-hover:w-full bg-[#64ffd9]'></div>
            </Link>
        </nav>
    </header>
  );
}

export default Header;