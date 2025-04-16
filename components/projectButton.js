import { buttonContext } from "@/pages";
import Image from "next/image";
import { useContext } from "react";

const ProjectButton = ({ name, url, index }) => {
    const [[currentProjectType, setCurrentProjectType]] = useContext(buttonContext);
    const isSelected = currentProjectType === name;

    return (
        <button
            onClick={() => setCurrentProjectType(name)}
            className={`px-[20px] py-[5px] text-[14px] maxLaptop:!ml-0 maxLaptop:mt-[20px] flex items-center gap-2 rounded-full transition-all ${
                isSelected
                    ? "bg-gradient-to-r from-purple-600/80 to-teal-500/80 shadow-lg shadow-purple-500/20 text-white"
                    : "bg-gray-800/70 text-[#9CA3AF]"}
                ${ (index === 0) ? "ml-0" : "ml-[15px]"}
                `}
        >
            <span className="flex flex-row items-center h-fit w-fit">
                {
                    (index === 0 || index === 1) ? <div
                        style={{
                            maskImage: `url('${url}')`,
                            WebkitMaskImage: `url('${url}')`,
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                            width: "15px",
                            height: "15px",
                        }}
                        className="mr-[10px] bg-white"
                    ></div> : <Image src={url} width={15} height={15} alt="illustration of a star" className="mr-[10px]"/>
                }
                <p>{name}</p>
            </span>
        </button>
    );
};

export default ProjectButton;
