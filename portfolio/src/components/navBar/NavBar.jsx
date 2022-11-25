import { useEffect } from "react";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        const hanldleWindowResize = () => {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize',hanldleWindowResize);

        return () => {
            window.removeEventListener('resize',hanldleWindowResize);
        };
    },[]);

    return ( 
        <div className="
            box-border 
            flex 
            p-3 
            bg-gray-100 
            max-md:relative 
            max-md:items-end 
            max-md:flex-col 
            md:justify-end"
        >
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                x
            </button>
            <nav 
                className="
                    absolute 
                    top-12
                    right-0
                    h-screen
                    
                    
                    
                    bg-gray-100
                    md:static
                    
                    " 
                hidden = {isOpen == false && windowSize.innerWidth < 768}
                >
                    <a className="block md:inline-block">Home</a>
                    <a className="block md:inline-block">About Me</a>
                    <a className="block md:inline-block">Project</a>
                    <a className="block md:inline-block">Tech</a>    
            </nav>
        </div>
    )
}

const getWindowSize = () => {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}
export default NavBar;