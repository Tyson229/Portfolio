import NavBar from "../../components/navBar/NavBar"

const Introduction = () => {
    return (
        <div className="bg-neutral-100 h-screen w-screen flex flex-col box-border">
            <div className="w-full flex box-border justify-center md:justify-end gap-4 p-4 text-base">
                <a className="hover:underline">Home</a>
                <a className="hover:underline">About</a>
                <a className="hover:underline">Project</a>
                <a className="hover:underline">Contact</a>
            </div>
            
            
            <div className="flex flex-col box-border h-full items-end justify-center flex-wrap gap-5">
                <div className="flex flex-col items-end w-3/4 box-border p-3 text-2xl">
                    <div>Hi, I'm <span className="font-bold text-blue-600">Tien Nguyen</span></div>
                    <div>Welcome to my portfolio</div>
                </div>
                <div className="flex flex-col p-3 items-end">
                    <div>Software Developer</div>
                    <div>Web Developer</div>
                </div>                    
                
            </div>
            <div className="flex box-border justify-center items-center">
                <div className="h-2 w-2 bg-black/40 rounded-full m-2"></div>
                <div className="h-2 w-2 bg-black/40 rounded-full m-2"></div>
                <div className="h-2 w-2 bg-black/40 rounded-full m-2"></div>
                <div className="h-2 w-2 bg-black/40 rounded-full m-2"></div>
            </div>
            
        </div>
        
    )
}

export default Introduction