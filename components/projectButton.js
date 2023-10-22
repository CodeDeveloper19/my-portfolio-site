import { useContext } from "react";
import { buttonContext } from "@/pages";
import Image from "next/image";

const ProjectButton = (props) => {
    const [[currentProjectType, setCurrentProjectType]] = useContext(buttonContext);

    return ( 
        <button onClick={() => setCurrentProjectType(props.name)} 
            style={{
            backgroundColor: (currentProjectType === props.name) ? '#131862' : 'transparent',
            borderColor: (currentProjectType === props.name) ? '#131862' : 'white',
            marginLeft: (props.name === 'Featured') ? '0px' : '30px'
            }} className="border-[1px] rounded-[20px] px-[20px] py-[5px] hover:bg-[#131862] hover:text-white text-[14px] maxLaptop:!ml-0 maxLaptop:mt-[20px] w-fit">
            <span className="flex flex-row items-center h-fit w-fit">
                <p>{props.name}</p>
                <Image src={props.url} width={15} height={15} alt="illustration of a star" className="ml-[10px]"/>
            </span>
        </button>
    );
}
 
export default ProjectButton;