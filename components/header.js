import { dropDownMenuContext } from '@/pages';
import Image from "next/image";
import { useContext } from 'react';
import { Link } from "react-scroll";


const Header = () => {

  const [[isDropDownMenu, setIsDropDownMenu]] = useContext(dropDownMenuContext);

  const dropDownMenu = () => {
      setIsDropDownMenu(!isDropDownMenu);
  };

  return (
    <header className="absolute top-0 flex flex-row items-center justify-between w-full px-[20px] minTablet:px-[50px] py-[40px] font-[500] text-[13px] font-robotoMono z-30">
      <span
        className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 text-[20px]"
        style={{ opacity: 1, willChange: "opacity" }}
      >
        okoli.dev
      </span>

      <div className="flex flex-row justify-end w-full h-fit">
        <button
          className="flex midTablet:hidden relative w-[30px] h-[30px]"
          onClick={dropDownMenu}
        >
          <Image src="/menu.png" fill alt="illustration of a hamburger menu" />
        </button>
        <nav className="flex-col hidden h-full midTablet:flex midTablet:flex-row w-fit">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="ml-[30px] flex flex-col group hover:cursor-pointer"
          >
            <div className="flex flex-row">
              <p className="text-[#64ffd9]">&lt;</p>
              <p className="ml-[5px] text-white">Projects</p>
              <p className="text-[#64ffd9]">/&gt;</p>
            </div>
            <div className="mt-[5px] transition-[width] duration-[400ms] h-[1px] w-0 group-hover:w-full bg-[#64ffd9]"></div>
          </Link>

          <Link
            to="workexperience"
            smooth={true}
            duration={500}
            className="ml-[30px] flex flex-col group hover:cursor-pointer"
          >
            <div className="flex flex-row">
              <p className="text-[#64ffd9]">&lt;</p>
              <p className="ml-[5px] text-white">Work Experience</p>
              <p className="text-[#64ffd9]">/&gt;</p>
            </div>
            <div className="mt-[5px] transition-[width] duration-[400ms] h-[1px] w-0 group-hover:w-full bg-[#64ffd9]"></div>
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="ml-[30px] flex flex-col group hover:cursor-pointer"
          >
            <div className="flex flex-row">
              <p className="text-[#64ffd9]">&lt;</p>
              <p className="ml-[5px] text-white">Skills</p>
              <p className="text-[#64ffd9]">/&gt;</p>
            </div>
            <div className="mt-[5px] transition-[width] duration-[400ms] h-[1px] w-0 group-hover:w-full bg-[#64ffd9]"></div>
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="ml-[30px] flex flex-col group hover:cursor-pointer"
          >
            <div className="flex flex-row">
              <p className="text-[#64ffd9]">&lt;</p>
              <p className="ml-[5px] text-white">Contact</p>
              <p className="text-[#64ffd9]">/&gt;</p>
            </div>
            <div className="mt-[5px] transition-[width] duration-[400ms] h-[1px] w-0 group-hover:w-full bg-[#64ffd9]"></div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
