import { useEffect, useState } from "react";
import Image from "next/image";

const ProjectImage = (props) => {
    const [imageMove, setImageMove] = useState('0%');

    useEffect(() => {
        if (props.src === '1.png' || props.src === '1.jpg'){
            setImageMove('0%');
        } else if (props.src === '2.png' || props.src === '2.jpg'){
            setImageMove('100%');
        } else if (props.src === '3.png' || props.src === '3.jpg'){
            setImageMove('200%');
        }
    }, [props.src]);

    return (
        <Image style={{ left: imageMove }} src={`${props.urlHead}${props.src}`} layout="fill" alt="image of a project" className="absolute object-cover h-full w-full rounded-[20px]" />
    );
}

export default ProjectImage;