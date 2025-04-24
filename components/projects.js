import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectImage from "./projectImage";

const Projects = (props) => {
    const [slidePosition, setSlidePosition] = useState('0px');
    const [positionButton, setPositionButton] = useState(0);

    useEffect(() => {
        switch (slidePosition) {
          case '-0%':
            setPositionButton(0);
            break;
          case '-100%':
            setPositionButton(1);
            break;
          case '-200%':
            setPositionButton(2);
            break;
        }
    }, [slidePosition])

    return ( 
      <div className="flex flex-col w-full h-full overflow-hidden top-0 transition-all duration-300 transform border border-gray-800 relative hover:top-[-4px] group rounded-xl bg-gray-900/80 hover:border-teal-500/50 backdrop-blur-sm">
        <div className="w-full h-[192px] relative overflow-hidden">
          <div className="absolute inset-0 z-10 transition-opacity bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
          <div style={{ transform: `translateX(${slidePosition})` }} className="relative flex flex-row h-full min-w-full transition-all duration-1000 w-fit">
            {
              props.images.map((data, index) => {
                return <ProjectImage key={index} {...data}/>
              })
            }
          </div>
          <div className="absolute z-20 flex space-x-2 -translate-x-1/2 bottom-3 left-1/2">
            {
              props.images.map((data, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setSlidePosition(`-${index * 100}%`)}
                    className="h-[.5rem] transition-all bg-teal-400 rounded-full"
                    style={{backgroundColor: (positionButton === index) ? '#64ffd9' : '#909090', width: (positionButton === index) ? '1rem' : '.5rem'}}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              })
            }
          </div>
        </div>  
        <div className="w-full p-[24px] flex flex-col gap-[16px]">
          <div className=" flex flex-col gap-[8px]">
            <h3 className="text-[16px]">{props.title}</h3>
            <p className="text-[#D1D5DB] text-[12px]">{props.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {
              props.tags.map((data, index) => {
                return <div key={index} className="bg-gray-800/80 rounded-full h-fit w-fit px-2 py-1 border border-1 border-gray-700 font-normal text-[10px] text-gray-300">{data}</div>
              })
            }
          </div>
          <div className="flex flex-wrap gap-3">
            <Link target="_blank" rel="noopener noreferrer" href={props.gitHub} className="p-2 text-gray-300 transition-colors bg-gray-800 rounded-full hover:bg-gray-700">
              <div
                className="w-[13px] h-[13px] bg-gray-300"
                style={{
                  WebkitMaskImage: "url('/github.svg')",
                  maskImage: "url('/github.svg')",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
                aria-label="illustration of GitHub"
              />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href={props.live} className="p-2 text-teal-400 transition-colors rounded-full bg-teal-500/20 hover:bg-teal-500/30">
            <div
                className="w-[13px] h-[13px] bg-teal-400"
                style={{
                  WebkitMaskImage: "url('/link.svg')",
                  maskImage: "url('/link.svg')",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
                aria-label="illustration of link icon"
              />
            </Link>
          </div>
        </div>
      </div>
     );
}
 
export default Projects;