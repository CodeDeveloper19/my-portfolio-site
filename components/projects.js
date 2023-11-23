import { useState, useEffect } from "react";
import Image from "next/image";
import ProjectImage from "./projectImage";

const Projects = (props) => {
    const [slidePosition, setSlidePosition] = useState('0px');
    const [positionButton, setPositionButton] = useState(0);

    useEffect(() => {
        switch (slidePosition) {
          case '0px':
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
      <div className="flex flex-col tablet:flex-row w-full h-full items-center mb-[100px]">
        <div className="flex flex-col items-center tablet:mr-[100px]">
          {
            (props.title === 'Election Alert Mobile App') ? 
            <div className="flex w-[450px] h-fit justify-center">
              <div className="flex w-[200px] h-[400px] rounded-[20px] relative overflow-hidden">
                <div style={{left: slidePosition}} className="flex flex-row h-full min-w-full w-fit relative transition-[left] duration-1000">
                  {
                    props.images.map((data, index) => {
                      return <ProjectImage key={index} {...data}/>
                    })
                  }
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.6] rounded-[20px]"></div>
              </div>
            </div>          
            :
            <div className="flex w-[450px] h-[230px] rounded-[20px] relative overflow-hidden">
              <div style={{left: slidePosition}} className="flex flex-row h-full min-w-full w-fit relative transition-[left] duration-1000">
                {
                  props.images.map((data, index) => {
                    return <ProjectImage key={index} {...data}/>
                  })
                }
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.6] rounded-[20px]"></div>
            </div>
          }
          <div className="flex flex-row w-[45px] justify-between h-fit mt-[20px]">
            <button style={{backgroundColor: (positionButton === 0) ? '#64ffd9' : '#909090'}} onClick={() => setSlidePosition('0px')} className="w-[7px] h-[7px] rounded-full"></button>
            <button style={{backgroundColor: (positionButton === 1) ? '#64ffd9' : '#909090'}} onClick={() => setSlidePosition('-100%')} className="w-[7px] h-[7px] rounded-full"></button>
            <button style={{backgroundColor: (positionButton === 2) ? '#64ffd9' : '#909090'}} onClick={() => setSlidePosition('-200%')} className="w-[7px] h-[7px] rounded-full"></button>
          </div>
        </div>
        <div className="flex flex-col h-fit justify-between items-center pb-[20px] mt-[70px] tablet:mt-0">
          <h3 className="text-[20px] mb-[20px]">{props.title}</h3>
          <div className="flex flex-col h-fit w-full">
            <div className="flex flex-row flex-wrap justify-center tablet:justify-normal">
              {
                props.tags.map((data, index) => {
                  return <div key={index} className="h-fit w-fit px-[10px] py-[5px] border border-1 font-normal text-[10px] mr-[10px] mt-[10px]">{data}</div>
                })
              }
            </div>
            <div className="flex flex-row mt-[30px] justify-center tablet:justify-normal">
              <a href={props.live} style={{display: (props.live === '') ? 'none' : 'flex'}} className="flex-row text-[12px] text-[#64ffd9] w-fit hover:scale-110 transition-[transform] duration-[400ms]" target="_blank" rel="noopener noreferrer">
                Live Site
                <Image className="ml-[5px]" src='/eye.png' width={15} height={15} alt="illustration of an eye"/>                
              </a>
              <a href={props.gitHub} style={{display: (props.gitHub === '') ? 'none' : 'flex', marginLeft: (props.live === '') ? '0px' : '20px'}} className="flex-row items-center text-[12px] text-[#64ffd9] w-fit hover:scale-110 transition-[transform] duration-[400ms]" target="_blank" rel="noopener noreferrer">
                Github
                <i className="fa-brands fa-github ml-[5px]"></i>                  
              </a>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Projects;